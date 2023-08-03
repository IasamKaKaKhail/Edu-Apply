const IMAGES_FOLDER = "/static/images/";
const SVGS_FOLDER = "/static/svgs/";
const makeImageURL = (name: string) => {
  return IMAGES_FOLDER + name;
};
const makeSvgURL = (name: string) => {
  return SVGS_FOLDER + name;
};
export const IMAGES = {
  authAside: makeImageURL("auth-aside.png"),
  computerGuyWink: makeImageURL("computer-guy-wink.gif"),
  bgCardCircles: makeImageURL("bg-card-circles.png"),
  paymentMasterCard: makeImageURL("payment-master-card.png"),
  paymentSbi: makeImageURL("payment-sbi.png"),
  bannerCircles: makeImageURL("banner-circles.png"),
  paymentVisa: makeImageURL("payment-VISA.png"),
};
export const SVGS = {
  curv: makeSvgURL("curve.svg"),
  shadow: makeSvgURL("shadow.svg"),
  bgAuth: makeSvgURL("bgAuth.svg"),
  eyeSlash: makeSvgURL("eyeSlash.svg"),
  eyeOpen: makeSvgURL("eyeOpen.svg"),
  iconGoogle: makeSvgURL("icon-google.svg"),
  call: makeSvgURL("call.svg"),
  eye: makeSvgURL("eye.svg"),
  lock: makeSvgURL("lock.svg"),
  profile: makeSvgURL("profile.svg"),
  sms: makeSvgURL("sms.svg"),
  edit: makeSvgURL("edit.svg"),
  add: makeSvgURL("add.svg"),
  trash: makeSvgURL("trash.svg"),
  edit2: makeSvgURL("edit2.svg"),
  closeIcon: makeSvgURL("closeIcon.svg"),
  hamburgerOutlined: makeSvgURL("hamburgerOutlined.svg"),
  hrDots: makeSvgURL("hrDots.svg"),
  doctor: makeSvgURL("doctor.svg"),
  engineer: makeSvgURL("engineer.svg"),
  balance: makeSvgURL("balance.svg"),
};
