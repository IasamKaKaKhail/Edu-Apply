import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

const formatPhone = (phoneNumber: string) => {
  try {
    const parseNumber = phoneUtil.parse(phoneNumber);
    const formattedNumber = phoneUtil.format(
      parseNumber,
      PhoneNumberFormat.INTERNATIONAL,
    );
    return `${formattedNumber}`;
  } catch (error) {
    console.log("error format phone number:", error);
    return `${phoneNumber}`;
  }
};

export default formatPhone;
