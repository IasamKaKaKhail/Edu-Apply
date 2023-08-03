import { S3_SERVER_URL } from "./constants";

export const convertNonEmptyValue = (value: any) => {
  if (value === null || value === undefined) {
    return "";
  }
  return value;
};

export const convertToMBOrKB = (sizeInBytes: number): string => {
  const sizeInMegaBytes = sizeInBytes / (1024 * 1024);
  if (sizeInMegaBytes < 1) {
    const sizeInKilobytes = sizeInBytes / 1024;
    return sizeInKilobytes.toFixed(2) + " KB";
  } else {
    return sizeInMegaBytes.toFixed(2) + " MB";
  }
};

export const extractFileExtension = (fileName: string): string => {
  const lastDotIndex = fileName.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return "";
  }
  return fileName.substring(lastDotIndex + 1);
};

export const trauncateString = ({
  limit = 40,
  str,
  keepExtension = false,
}: {
  str: string;
  limit?: number;
  keepExtension?: boolean;
}): string => {
  if (str.length <= limit) {
    return str;
  }
  if (keepExtension) {
    const extension = extractFileExtension(str);
    return str.substring(0, limit) + "....." + extension;
  }
  return str.substring(0, limit) + ".....";
};

//todo --> setup uploadFile for eduApply
export const uploadFile = async (files: File[]) => {
  try {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });
    const res = await fetch(S3_SERVER_URL, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error("Failed to upload file");
    return res.json();
  } catch (error) {
    console.log("error uploading file", error);
  }
};
