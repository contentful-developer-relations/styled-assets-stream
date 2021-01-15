import React, { useEffect, useState } from 'react';
import { FieldExtensionSDK } from 'contentful-ui-extensions-sdk';
import {
    TextField,
    Card,
    Pill,
    Select,
    Option,
    Asset,
} from '@contentful/forma-36-react-components';
import { RichTextEditor } from '@contentful/field-editor-rich-text';

interface FieldProps {
    sdk: FieldExtensionSDK;
}

async function getAssetData(rtData: any, getAsset: any) {
    const assetPromiseList = rtData.content
        .map((node: any) => {
            if (node.nodeType === 'embedded-asset-block') {
                return getAsset(node.data.target.sys.id);
            }

            return null;
        })
        .filter((x: any) => x);

    return await Promise.all(assetPromiseList);
}

function changeAssetMetaData(key: string, value: string, setValue: any, currentValue: any) {
  debugger
  currentValue.assetData[key].cssClassName = value;

  setValue(currentValue);
}

const Field = (props: FieldProps) => {
    const [modifiedSDK, setModifiedSDK] = useState(props.sdk);

    useEffect(() => {
        props.sdk.window.startAutoResizer();
        console.log(props.sdk.field.getValue());

        const setValue = async (value: any) => {
            const result = await getAssetData(value, props.sdk.space.getAsset);

            const assetData = result.reduce((acc: any, value: any) => {
                acc[value.sys.id] = value;
                return acc;
            }, {});

            return props.sdk.field.setValue({
                ...value,
                assetData,
            });
        };

        setModifiedSDK({
            ...props.sdk,
            field: { ...props.sdk.field, setValue },
        });
    }, []);

    const assetKeys = Object.keys(props.sdk.field.getValue().assetData);
    return (
        <>
            <RichTextEditor sdk={modifiedSDK} />
            <ul>
                {assetKeys.map((key: any) => (
                    <li>
                        <Card>
                          <Asset src={props.sdk.field.getValue().assetData[key].fields.file["en-US"].url}/>
                          <Select onChange={(e: any) => changeAssetMetaData(key, e.target.value, (v: any) => props.sdk.field.setValue(v), props.sdk.field.getValue())}>
                            <Option value=".image-position-right">Position Right</Option>
                            <Option value=".image-position-left">Position Left</Option>
                            <Option value=".image-position-center">Position Center</Option>
                          </Select>
                        </Card>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Field;
