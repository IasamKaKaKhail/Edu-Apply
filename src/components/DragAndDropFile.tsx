import { SxProps, Theme } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { NameHeading, SubTitle } from "./AppText";
import { UploadFileWrapper } from "./dashboard/styled";

type Props = {
  setFiles: Dispatch<SetStateAction<File[]>>;
  options?: DropzoneOptions | undefined;
  sx?: SxProps<Theme>;
};

let filNotSupported = false;
const MAX_SIZE_TEN_MB = 10000000;
const DragAndDropFile = ({ setFiles, options, sx }: Props) => {
  const onDrop = useCallback(
    (files: File[]) => {
      setFiles((prev) => [...files, ...prev]);
    },
    [setFiles],
  );
  const { getRootProps, getInputProps, isDragReject, isDragActive } =
    useDropzone({
      accept: {
        "image/*": [".jpeg", ".png"],
        "application/pdf": [],
      },
      maxSize: MAX_SIZE_TEN_MB,
      ...options,
      onDrop,
    });
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (isDragReject) {
      filNotSupported = true;
    }
    if (filNotSupported && !isDragActive) {
      filNotSupported = false;
      enqueueSnackbar("unsupported file", { variant: "error" });
    }
  }, [isDragReject, isDragActive]);

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <UploadFileWrapper sx={{ ...sx }}>
        <NameHeading sx={{ fontSize: "1.8rem" }}>
          Drag and drop PDF file here
        </NameHeading>
        <svg
          width="3.6rem"
          height="3.6rem"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6597 13.3496C30.0597 13.8146 32.2647 16.5896 32.2647 22.6646V22.8596C32.2647 29.5646 29.5797 32.2496 22.8747 32.2496H13.1097C6.40473 32.2496 3.71973 29.5646 3.71973 22.8596V22.6646C3.71973 16.6346 5.89473 13.8596 11.2047 13.3646"
            stroke="#4692FE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 22.4997V5.42969"
            stroke="#4692FE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.0246 8.775L17.9996 3.75L12.9746 8.775"
            stroke="#4692FE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <SubTitle sx={{ fontWeight: 600 }}>Maximum size : 10 MB</SubTitle>
      </UploadFileWrapper>
    </div>
  );
};
export default DragAndDropFile;
