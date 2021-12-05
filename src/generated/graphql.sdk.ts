import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type Address = {
  __typename?: 'Address';
  /** 地址 */
  address: Scalars['String'];
  /** 城市；ex. 台北 */
  city: Scalars['String'];
  /** 鄉鎮市區 */
  dist: Scalars['String'];
};

export type AddressInput = {
  /** 地址 */
  address: Scalars['String'];
  /** 城市；ex. 台北 */
  city: Scalars['String'];
  /** 鄉鎮市區 */
  dist: Scalars['String'];
};

export type BindLineReqDto = {
  /** Line Login或LIFF之用戶Access Token */
  access_token: Scalars['String'];
};

export type BindResDto = {
  __typename?: 'BindResDto';
  result: Scalars['Boolean'];
};

export type BoolResDto = {
  __typename?: 'BoolResDto';
  result: Scalars['Boolean'];
};

export type CarrierData = {
  __typename?: 'CarrierData';
  /** 載具號碼；當載具類別[CarrierType]="1"(綠界科技電子發票載具)時，請帶空字串；當載具類別[CarrierType]="2"(買受人之自然人憑證)時，則請帶固定長度為 16 且格式為 2碼大寫英文字母加上 14 碼數字；當載具類別[CarrierType]="3"(買受人之手機條碼)時，則請帶固定長度為 8 且格式為 1 碼斜線「/」加上 7 碼由數字及大寫英文字母及+-.符號組成的字串 */
  carrierNumber: Scalars['String'];
  /** 載具類別(1: 會員載具, 2: 自然人憑證, 3: 手機條碼) */
  carrierType: Scalars['String'];
};

export type Contact = {
  __typename?: 'Contact';
  /** 聯絡人姓名 */
  name: Scalars['String'];
  /** 聯絡電話 */
  phoneNumber: Scalars['String'];
};

export type ContactInput = {
  /** 聯絡人姓名 */
  name: Scalars['String'];
  /** 聯絡電話 */
  phoneNumber: Scalars['String'];
};

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  city: Scalars['String'];
  detailedAddressLine: Scalars['String'];
  district: Scalars['String'];
  street: Scalars['String'];
};

export type CustomerData = {
  __typename?: 'CustomerData';
  /** 地址(如『106 台北市南港區發票一街 1 號 1 樓』) */
  customerAddress: CustomerAddress;
  /** Email地址(電子紙本寄送之Email) */
  customerEmail: Scalars['String'];
  customerIdentifier: Scalars['String'];
  /** 客戶名稱(若有輸入統編則為公司名稱) */
  customerName: Scalars['String'];
  /** 電話(選填) */
  customerPhone: Scalars['String'];
};

export type DeviceModelEntity = {
  __typename?: 'DeviceModelEntity';
  deviceUuid: Scalars['String'];
  manufacture: Scalars['String'];
  model: Scalars['String'];
  uuid: Scalars['ID'];
};

export enum DeviceStatus {
  Abnormal = 'Abnormal',
  Normal = 'Normal'
}

export type DeviceTypeEntity = {
  __typename?: 'DeviceTypeEntity';
  name: Scalars['String'];
  uuid: Scalars['ID'];
};

export type DocumentEntity = {
  __typename?: 'DocumentEntity';
  /** Document之各類型File數據 */
  documentFiles?: Maybe<Array<DocumentFileEntity>>;
  expiredAt: Scalars['DateTime'];
  /** 檔名(用戶上傳文件原文件) */
  filename: Scalars['String'];
  /** 用戶上傳文檔總頁數；以轉換後之文件為基準，故需process完畢才會有該值 */
  pages?: Maybe<Scalars['Int']>;
  /** 文檔處理失敗錯誤訊息 */
  processFailedMessage?: Maybe<Scalars['String']>;
  /** Document處理流程狀態 */
  processStatus: DocumentProcessStatus;
  userUuid: Scalars['String'];
  uuid: Scalars['ID'];
};

export type DocumentFileEntity = {
  __typename?: 'DocumentFileEntity';
  bucketName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  deletedAt: Scalars['DateTime'];
  deletedOnBucket?: Maybe<Scalars['Boolean']>;
  document_uuid: Scalars['String'];
  path?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type: DocumentFileType;
  uuid: Scalars['ID'];
};

export enum DocumentFileType {
  Original = 'ORIGINAL',
  Preview = 'PREVIEW',
  Print = 'PRINT'
}

export enum DocumentProcessStatus {
  Converted = 'CONVERTED',
  Converting = 'CONVERTING',
  Failed = 'FAILED',
  Finished = 'FINISHED',
  Uploaded = 'UPLOADED',
  WaitingForUploading = 'WAITING_FOR_UPLOADING',
  Watermarked = 'WATERMARKED',
  Watermarking = 'WATERMARKING'
}

export type DonationData = {
  __typename?: 'DonationData';
  loveCode: Scalars['String'];
};

export type FacilityDeviceEntity = {
  __typename?: 'FacilityDeviceEntity';
  facilityUuid: Scalars['String'];
  model: DeviceModelEntity;
  name: Scalars['String'];
  params: Array<Scalars['String']>;
  serialNumber: Scalars['String'];
  status: DeviceStatus;
  statusDetails: Scalars['String'];
  type: DeviceTypeEntity;
  typeUuid: Scalars['String'];
  uuid: Scalars['ID'];
};

export enum FacilityStatus {
  Abnormal = 'Abnormal',
  Normal = 'Normal'
}

export type FacilityTypeEntity = {
  __typename?: 'FacilityTypeEntity';
  /** 设备类型名称 */
  name: Scalars['String'];
  uuid: Scalars['ID'];
};

export type GetDeviceListByFacilityUuidResDtoModel = {
  __typename?: 'GetDeviceListByFacilityUuidResDtoModel';
  manufacture: Scalars['String'];
  model: Scalars['String'];
  uuid: Scalars['ID'];
};

export type GetDeviceListByFacilityUuidResDtoType = {
  __typename?: 'GetDeviceListByFacilityUuidResDtoType';
  name: Scalars['String'];
  uuid: Scalars['ID'];
};

export type GetFacilityInfoResDtoAdministrator = {
  __typename?: 'GetFacilityInfoResDtoAdministrator';
  profile: GetFacilityInfoResDtoAdministratorProfile;
  uuid: Scalars['ID'];
};

export type GetFacilityInfoResDtoAdministratorProfile = {
  __typename?: 'GetFacilityInfoResDtoAdministratorProfile';
  avatar: Scalars['String'];
  first_name: Scalars['String'];
  gender: UserGender;
  last_name: Scalars['String'];
  nickname: Scalars['String'];
};

export type GetFacilityInfoResDtoType = {
  __typename?: 'GetFacilityInfoResDtoType';
  name: Scalars['String'];
  uuid: Scalars['ID'];
};

export type GetFacilityInfoResDtoVendor = {
  __typename?: 'GetFacilityInfoResDtoVendor';
  address: Address;
  location: GetFacilityInfoResDtoVendorLocation;
  name: Scalars['String'];
  uuid: Scalars['ID'];
};

export type GetFacilityInfoResDtoVendorLocation = {
  __typename?: 'GetFacilityInfoResDtoVendorLocation';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type GetFacilityListResDtoItem = {
  __typename?: 'GetFacilityListResDtoItem';
  access_key: Scalars['String'];
  access_secret: Scalars['String'];
  administrator: GetFacilityListResDtoItemAdministrator;
  created_at: Scalars['String'];
  name: Scalars['String'];
  status: FacilityStatus;
  status_details: Scalars['String'];
  type: GetFacilityListResDtoItemType;
  uuid: Scalars['ID'];
  vendor: GetFacilityListResDtoItemVendor;
};

export type GetFacilityListResDtoItemAdministrator = {
  __typename?: 'GetFacilityListResDtoItemAdministrator';
  profile: GetFacilityListResDtoItemAdministratorProfile;
  uuid: Scalars['ID'];
};

export type GetFacilityListResDtoItemAdministratorProfile = {
  __typename?: 'GetFacilityListResDtoItemAdministratorProfile';
  avatar: UserGender;
  first_name: Scalars['String'];
  gender: UserGender;
  last_name: Scalars['String'];
  nickname: Scalars['String'];
};

export type GetFacilityListResDtoItemType = {
  __typename?: 'GetFacilityListResDtoItemType';
  name: Scalars['String'];
  uuid: Scalars['ID'];
};

export type GetFacilityListResDtoItemVendor = {
  __typename?: 'GetFacilityListResDtoItemVendor';
  address: Address;
  location: GetFacilityListResDtoItemVendorLocation;
  name: Scalars['String'];
  uuid: Scalars['String'];
};

export type GetFacilityListResDtoItemVendorLocation = {
  __typename?: 'GetFacilityListResDtoItemVendorLocation';
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

/** 開立方式(載具/電子紙本) */
export enum IssueMethod {
  /** 載具(手機條碼/自然人憑證/會員載具等) */
  Carrier = 'CARRIER',
  /** 電子紙本 */
  DigitalPrint = 'DIGITAL_PRINT',
  /** 無(捐贈無需開立方式) */
  None = 'NONE'
}

/** 開立至對象(個人、公司、捐贈) */
export enum IssueTo {
  /** 公司 */
  Company = 'COMPANY',
  /** 捐贈 */
  Donate = 'DONATE',
  /** 個人 */
  Individual = 'INDIVIDUAL'
}

export type JobEntity = {
  __typename?: 'JobEntity';
  configuration: PrintConfiguration;
  /** 文檔 */
  document: DocumentEntity;
  /** 錯誤訊息 */
  errorMessage?: Maybe<Scalars['String']>;
  /** 總共輸出頁數數量。由後端計算 */
  quantity?: Maybe<Scalars['Int']>;
  state: JobState;
  /** Job(任務)類型 */
  type: JobType;
  /** Job UUID */
  uuid?: Maybe<Scalars['ID']>;
};

/** 打印任務狀態 */
export enum JobState {
  /** job 打印失败 */
  Failed = 'FAILED',
  /** job 打印完成 */
  Finished = 'FINISHED',
  Making = 'MAKING',
  /** job绑定了order(已下單) */
  Ordered = 'ORDERED',
  /** 用户创建了 job */
  Submitted = 'SUBMITTED'
}

/** 任務類型 */
export enum JobType {
  /** 打印類型任務 */
  Print = 'PRINT'
}

export type LoginReqDto = {
  credential: Scalars['String'];
  identifier: Scalars['String'];
  identity_type: UserIdentityType;
};

export type LoginResDto = {
  __typename?: 'LoginResDto';
  expires_in: Scalars['Int'];
  token: Scalars['String'];
};

export enum MediaSize {
  /** A4 */
  A4 = 'A4'
}

export type MerchantContactsEntity = {
  __typename?: 'MerchantContactsEntity';
  email: Scalars['String'];
  merchantUuid: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  uuid: Scalars['ID'];
};

export type MerchantVendorEntity = {
  __typename?: 'MerchantVendorEntity';
  address: Address;
  contacts: Contact;
  /** 與用戶坐標之距離 */
  distance?: Maybe<Scalars['Float']>;
  images?: Maybe<Array<Scalars['String']>>;
  location: PostGisGeography;
  merchantUuid: Scalars['String'];
  /** 门店名称 */
  name: Scalars['String'];
  pricing: Array<VendorPricingEntity>;
  /** 門店提供之服務 */
  services: Array<MerchantVendorService>;
  uuid: Scalars['ID'];
  zipCode: Scalars['String'];
};

/** 門店提供之服務 */
export enum MerchantVendorService {
  /** 人工影印 */
  HumanServiceCopy = 'HumanServiceCopy',
  /** 人工列印 */
  HumanServicePrint = 'HumanServicePrint',
  /** 人工掃描 */
  HumanServiceScan = 'HumanServiceScan',
  /** 自助影印 */
  SelfServiceCopy = 'SelfServiceCopy',
  /** 自助列印 */
  SelfServicePrint = 'SelfServicePrint',
  /** 自助掃描 */
  SelfServiceScan = 'SelfServiceScan'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** 同意訂單退款之申請 */
  approveOrderRefundApplication: Order;
  /** 用戶綁定Line */
  bindLine: BindResDto;
  /** 綁定或變更Email */
  bindOrChangeEmail: BoolResDto;
  /** 綁定或變更手機號碼 */
  bindOrChangePhone: BoolResDto;
  /** 變更密碼 */
  changePassword: BoolResDto;
  login: LoginResDto;
  /** 訂單退款(管理員/商家手動發起) */
  refundOrder: Order;
  /** 拒絕接單 */
  refuseOrder: Order;
  /** 註冊(目前僅支持Email) */
  register: RegisterResDto;
  /** 拒絕訂單退款之申請 */
  rejectOrderRefundApplication: Order;
  sendEmailAuthCode: BoolResDto;
  sendPhoneAuthCode: BoolResDto;
  /** 接受訂單(接單) */
  takeOrder: Order;
  updateUserProfile: UserProfile;
};


export type MutationApproveOrderRefundApplicationArgs = {
  applicationUuid: Scalars['String'];
};


export type MutationBindLineArgs = {
  body: BindLineReqDto;
};


export type MutationBindOrChangeEmailArgs = {
  email: Scalars['String'];
  verificationCode: Scalars['String'];
};


export type MutationBindOrChangePhoneArgs = {
  phone: Scalars['String'];
  verificationCode: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


export type MutationLoginArgs = {
  body: LoginReqDto;
};


export type MutationRefundOrderArgs = {
  refundOrderInput: RefundOrderInput;
};


export type MutationRefuseOrderArgs = {
  input: RefuseOrderInput;
  vedorId: Scalars['String'];
};


export type MutationRegisterArgs = {
  body: RegisterReqDto;
};


export type MutationRejectOrderRefundApplicationArgs = {
  applicationUuid: Scalars['String'];
  rejectedReason: Scalars['String'];
};


export type MutationSendEmailAuthCodeArgs = {
  email: Scalars['String'];
};


export type MutationSendPhoneAuthCodeArgs = {
  phone: Scalars['String'];
};


export type MutationTakeOrderArgs = {
  input: TakeOrderInput;
  vedorId: Scalars['String'];
};


export type MutationUpdateUserProfileArgs = {
  profile: UserProfileInput;
};

export type Order = {
  __typename?: 'Order';
  created_at: Scalars['DateTime'];
  jobs: Array<JobEntity>;
  /** 用戶取件時訂單編號 */
  number: Scalars['String'];
  /** 用戶手動輸入取件時之密碼 */
  password: Scalars['String'];
  /** 該訂單之所有支付單 */
  payments: Array<PaymentEntity>;
  /** 數量 */
  quantity: Scalars['Float'];
  /** 訂單發票 */
  receipt?: Maybe<ReceiptEntity>;
  receiptBuyer: OrderReceiptBuyerEntity;
  /** 訂單狀態 */
  state: OrderStateEnum;
  /** 訂單小計(未稅) */
  subTotal: Scalars['Float'];
  /** 訂單小計(含稅) */
  subTotalWithTax: Scalars['Float'];
  /** 系統修正(增/減)金額 */
  systemModificationAmount: Scalars['Float'];
  /** 訂單總金額 */
  total: Scalars['Float'];
  /** 單價 */
  unitPrice: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  /** 該訂單用戶 */
  user: UserEntity;
  user_uuid: Scalars['String'];
  uuid: Scalars['ID'];
  vendor: MerchantVendorEntity;
  /** 門店UUID */
  vendorUuid?: Maybe<Scalars['String']>;
};

export type OrderFilterInput = {
  /** 用戶UUID */
  userUuid?: InputMaybe<Scalars['String']>;
};

export type OrderReceiptBuyerEntity = {
  __typename?: 'OrderReceiptBuyerEntity';
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 根據發票買受人開立方式(Issue Method)對應之數據 */
  data: ReceiptBuyerDataUnion;
  /** 開立方式：電子紙本/載具 */
  issueMethod: IssueMethod;
  /** 開立至對象：個人(individual)/公司(company)/捐贈(donate) */
  issueTo: IssueTo;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_uuid: Scalars['String'];
  uuid: Scalars['ID'];
};

export type OrderRefundApplicationReason = {
  __typename?: 'OrderRefundApplicationReason';
  /** 退款原因代碼 */
  code: Scalars['String'];
  /** 描述 */
  description?: Maybe<Scalars['String']>;
  /** 標題 */
  title: Scalars['String'];
};

export type OrderRefundApplicationReasonInput = {
  /** 退款原因代碼 */
  code: Scalars['String'];
  /** 描述 */
  description?: InputMaybe<Scalars['String']>;
  /** 標題 */
  title: Scalars['String'];
};

/** 訂單狀態 */
export enum OrderStateEnum {
  /** 退款申請中 */
  ApplyingRefund = 'ApplyingRefund',
  /** 待支付 */
  ArrangingPayment = 'ArrangingPayment',
  /** 已取消 */
  Cancelled = 'Cancelled',
  /** 已完成 */
  Completed = 'Completed',
  /** 商家已接單 */
  OrderTaken = 'OrderTaken',
  /** 已支付(未請款) */
  PaymentAuthorized = 'PaymentAuthorized',
  /** 已支付(已請款) */
  PaymentSettled = 'PaymentSettled',
  /** 待取件 */
  PickingUp = 'PickingUp',
  /** 製作中 */
  Producing = 'Producing',
  RefundApplicationRefused = 'RefundApplicationRefused',
  /** 已退款 */
  Refunded = 'Refunded',
  /** 退款中 */
  Refunding = 'Refunding',
  /** 拒絕接單 */
  RefuseTakingOrder = 'RefuseTakingOrder',
  /** 待接單 */
  TakingOrder = 'TakingOrder'
}

export enum Orientation_Enum {
  /** 橫式 */
  Landscape = 'LANDSCAPE',
  /** 直式 */
  Portrait = 'PORTRAIT'
}

export type PaymentEntity = {
  __typename?: 'PaymentEntity';
  /** 金額 */
  amount: Scalars['Float'];
  /** 支付方式 */
  method: PaymentMethodEnum;
  /** 支付時間 */
  paidAt?: Maybe<Scalars['DateTime']>;
  paymentUrl: Scalars['String'];
  /** 退款數據 */
  refunds: Array<Refund>;
  /** 支付單狀態 */
  state: PaymentState;
  uuid: Scalars['String'];
};

/** 支付方式 */
export enum PaymentMethodEnum {
  /** Apple Pay */
  TappayApplePay = 'TAPPAY_APPLE_PAY',
  /** 悠遊付 */
  TappayEasyWallet = 'TAPPAY_EASY_WALLET',
  /** 街口支付 */
  TappayJkoPay = 'TAPPAY_JKO_PAY',
  /** Line Pay */
  TappayLinePay = 'TAPPAY_LINE_PAY'
}

/** 支付狀態 */
export enum PaymentState {
  /** 已支付(未請款) */
  Authorized = 'Authorized',
  /** 已創建 */
  Created = 'Created',
  /** 已拒絕 */
  Declined = 'Declined',
  /** 錯誤 */
  Error = 'Error',
  /** 已退款 */
  Refunded = 'Refunded',
  /** 已支付(已請款) */
  Settled = 'Settled'
}

export type PlatformAnnouncementEntity = {
  __typename?: 'PlatformAnnouncementEntity';
  canceled_at: Scalars['DateTime'];
  content: Scalars['String'];
  deleted: Scalars['Boolean'];
  if_cancel: Scalars['Boolean'];
  priority: Scalars['Float'];
  publish_time: Scalars['DateTime'];
  title: Scalars['String'];
  uuid: Scalars['ID'];
};

export type PlatformAnnouncementUserEntity = {
  __typename?: 'PlatformAnnouncementUserEntity';
  announcement: PlatformAnnouncementEntity;
  announcement_uuid: Scalars['String'];
  if_read: Scalars['Boolean'];
  read_time: Scalars['DateTime'];
  user_uuid: Scalars['String'];
  uuid: Scalars['ID'];
};

export type PostGisGeography = {
  __typename?: 'PostGisGeography';
  coordinates: Array<Scalars['Float']>;
  type: Scalars['String'];
};

export type PostGisGeographyInput = {
  coordinates: Array<Scalars['Float']>;
  type: Scalars['String'];
};

export type PrintConfiguration = {
  __typename?: 'PrintConfiguration';
  /** 副本份數 */
  copies?: Maybe<Scalars['Int']>;
  /** 紙張Size */
  media_size: MediaSize;
  /** 輸出方向 */
  orientation: Orientation_Enum;
  /** 輸出範圍； ex. "1-3" */
  pageRanges: Array<Scalars['String']>;
  /** 單張多(n)頁；n可為1,2,4,6,9,16；目前僅支持1 */
  pagesPerSheet?: Maybe<Scalars['Int']>;
  /** 輸出色彩模式 */
  print_color_mode: Print_Color_Mode_Enum;
  /** 單/雙面 */
  sides: Sides;
};

export type PrintConfigurationInput = {
  /** 副本份數 */
  copies?: InputMaybe<Scalars['Int']>;
  /** 紙張Size */
  media_size: MediaSize;
  /** 輸出方向 */
  orientation: Orientation_Enum;
  /** 輸出範圍； ex. "1-3" */
  pageRanges: Array<Scalars['String']>;
  /** 單張多(n)頁；n可為1,2,4,6,9,16；目前僅支持1 */
  pagesPerSheet?: InputMaybe<Scalars['Int']>;
  /** 輸出色彩模式 */
  print_color_mode: Print_Color_Mode_Enum;
  /** 單/雙面 */
  sides: Sides;
};

export enum Print_Color_Mode_Enum {
  /** 彩色 */
  Color = 'COLOR',
  /** 黑白(灰階) */
  Monochrome = 'MONOCHROME'
}

export type Query = {
  __typename?: 'Query';
  /** 用戶數據 */
  me: UserEntity;
  myProfile: UserProfile;
  /** 獲取訂單列表 */
  orders: Array<Order>;
  userPreference: UserPreferenceEntity;
  vendor: MerchantVendorEntity;
  /** 返回所有門店列表 */
  vendors?: Maybe<Array<MerchantVendorEntity>>;
};


export type QueryOrdersArgs = {
  filter: OrderFilterInput;
  vendorId: Scalars['String'];
};


export type QueryUserPreferenceArgs = {
  id: Scalars['String'];
};


export type QueryVendorArgs = {
  uuid: Scalars['String'];
};


export type QueryVendorsArgs = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type ReceiptAllowanceEntity = {
  __typename?: 'ReceiptAllowanceEntity';
  /** 開立折讓原因 */
  reasons?: Maybe<Scalars['String']>;
  receipt: ReceiptEntity;
};

export type ReceiptBuyer = {
  __typename?: 'ReceiptBuyer';
  createdAt?: Maybe<Scalars['DateTime']>;
  /** 根據發票買受人開立方式(Issue Method)對應之數據 */
  data: ReceiptBuyerDataUnion;
  /** 開立方式：電子紙本/載具 */
  issueMethod: IssueMethod;
  /** 開立至對象：個人(individual)/公司(company)/捐贈(donate) */
  issueTo: IssueTo;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user_uuid: Scalars['String'];
  uuid: Scalars['ID'];
};

export type ReceiptBuyerDataUnion = CarrierData | CustomerData | DonationData;

export type ReceiptEntity = {
  __typename?: 'ReceiptEntity';
  /** 折讓單 */
  allowances?: Maybe<Array<ReceiptAllowanceEntity>>;
  /** 開立時間 */
  issueAt: Scalars['DateTime'];
  /** 作廢時間 */
  issueInvalidAt?: Maybe<Scalars['DateTime']>;
  /** 通知用戶作廢時間 */
  issueInvalidNotifiedAt?: Maybe<Scalars['DateTime']>;
  /** 作廢原因 */
  issueInvalidReason?: Maybe<Scalars['String']>;
  /** 通知用戶開立時間 */
  issueNotifiedAt?: Maybe<Scalars['DateTime']>;
  /** Order UUID */
  order_uuid: Scalars['String'];
  /** Payment UUID */
  payment_uuid: Scalars['String'];
  /** 發票開立品項明細 */
  receiptItems: Array<ReceiptItem>;
  /** 買受人資訊(電子發票開立資訊) */
  receipt_buyer: ReceiptBuyer;
  /** 發票號碼 */
  receipt_number: Scalars['String'];
  /** 發票隨機碼 */
  receipt_random_number: Scalars['String'];
  /** 發票開立狀態 */
  status: ReceiptStateEnum;
  /** 發票總金額 */
  total_amount: Scalars['Float'];
  /** Unique Identifier */
  uuid: Scalars['String'];
};

export type ReceiptItem = {
  __typename?: 'ReceiptItem';
  /** 總價 */
  amount: Scalars['Float'];
  /** 總價(含稅) */
  amountWithTax: Scalars['Float'];
  /** 品項名稱 */
  name: Scalars['String'];
  /** 數量 */
  quantity: Scalars['Float'];
  /** 計算單位(ex. 張/次) */
  unit: Scalars['String'];
  /** 單價 */
  unitPrice: Scalars['Float'];
};

/** 發票狀態 */
export enum ReceiptStateEnum {
  /** 已開立折讓 */
  Allowance = 'ALLOWANCE',
  /** 已作廢折讓 */
  AllowanceInvalided = 'ALLOWANCE_INVALIDED',
  /** 已開立 */
  Issued = 'ISSUED',
  /** 已作廢 */
  IssueInvalided = 'ISSUE_INVALIDED'
}

export type Refund = {
  __typename?: 'Refund';
  /** 退款失敗/錯誤訊息 */
  errorMessage: Scalars['String'];
  /** 支付單數據 */
  payment: PaymentEntity;
  /** 支付單ID */
  paymentId: Scalars['String'];
  /** 退款原因 */
  reason: Scalars['String'];
  /** 退款時間(API請求失敗時間) */
  refundFailedAt?: Maybe<Scalars['DateTime']>;
  /** 退款時間(API請求成功時間) */
  refundedAt?: Maybe<Scalars['DateTime']>;
  /** 退款狀態 */
  state: RefundState;
  /** 退款總額 */
  total: Scalars['Float'];
  /** 退款交易流水號 */
  transactionId: Scalars['String'];
  /** ID */
  uuid: Scalars['String'];
};

export type RefundOrderInput = {
  /** 訂單ID(UUID) */
  orderId: Scalars['String'];
  /** 退款原因 */
  reason?: InputMaybe<Scalars['String']>;
};

/** 退款狀態 */
export enum RefundState {
  /** 退款中(銀行退款作業中) */
  Authorized = 'Authorized',
  /** 退款失敗 */
  Failed = 'Failed',
  /** 待退款 */
  Pending = 'Pending',
  /** 退款中(平台/商家處理中) */
  Processing = 'Processing',
  /** 已退款 */
  Settled = 'Settled'
}

export type RefuseOrderInput = {
  /** 訂單ID(UUID) */
  orderId: Scalars['String'];
  /** 拒絕原因 */
  reason?: InputMaybe<Scalars['String']>;
};

export type RegisterReqDto = {
  /** 驗證碼 */
  code: Scalars['String'];
  /** 密碼 */
  credential: Scalars['String'];
  /** 身份類型之識別碼(email/phone) */
  identifier: Scalars['String'];
  /** 註冊身份類型(email/phone)，目前只支持email */
  identity_type: UserIdentityType;
  profile?: InputMaybe<RegisterReqDtoProfile>;
};

export type RegisterReqDtoProfile = {
  avatar?: InputMaybe<Scalars['String']>;
  /** 生日(UTC Timstamp) */
  birthday?: InputMaybe<Scalars['Int']>;
  first_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<UserGender>;
  last_name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
};

export type RegisterResDto = {
  __typename?: 'RegisterResDto';
  expires_in: Scalars['Int'];
  token: Scalars['String'];
};

export enum Sides {
  /** 單面 */
  OneSided = 'ONE_SIDED',
  /** 雙面(長邊裝訂) */
  TwoSidedLongEdge = 'TWO_SIDED_LONG_EDGE',
  /** 雙面(短邊裝訂) */
  TwoSidedShortEdge = 'TWO_SIDED_SHORT_EDGE'
}

export type TakeOrderInput = {
  /** 訂單ID(UUID) */
  orderId: Scalars['String'];
};

export type UserAuthLocal = {
  __typename?: 'UserAuthLocal';
  /** Email */
  email?: Maybe<Scalars['String']>;
  /** 用户手機號 */
  phone?: Maybe<Scalars['String']>;
  /** 所属用户uuid */
  userUuid: Scalars['ID'];
  /** username */
  username?: Maybe<Scalars['String']>;
};

export type UserAuthThirdParty = {
  __typename?: 'UserAuthThirdParty';
  /** 第三方登陸身份標示 */
  identifier: Scalars['String'];
  /** 第三方登陸之平台 */
  identityType: UserIdentityType;
  userUuid: Scalars['String'];
  uuid: Scalars['ID'];
};

export type UserEntity = {
  __typename?: 'UserEntity';
  /** 登入訊息 */
  authLocal: UserAuthLocal;
  /** 第三方登入訊息 */
  authThirdParty: Array<UserAuthThirdParty>;
  platformAnnouncementUserList: Array<PlatformAnnouncementUserEntity>;
  preference: UserPreferenceEntity;
  profile: UserProfile;
  userRole: UserRoleEntity;
  uuid: Scalars['ID'];
};

export enum UserGender {
  Female = 'female',
  Male = 'male'
}

export enum UserIdentityType {
  /** Email */
  Email = 'email',
  /** Line */
  Line = 'line',
  /** 行動電話號碼 */
  Phone = 'phone'
}

export type UserPreferenceEntity = {
  __typename?: 'UserPreferenceEntity';
  language: UserPreferenceLanguage;
  userUuid: Scalars['ID'];
};

export enum UserPreferenceLanguage {
  ZhCn = 'ZH_CN',
  ZhHk = 'ZH_HK',
  ZhTw = 'ZH_TW'
}

export type UserProfile = {
  __typename?: 'UserProfile';
  /** 用戶頭像 */
  avatar?: Maybe<Scalars['String']>;
  /** 生日(UTC Timstamp) */
  birthday?: Maybe<Scalars['Float']>;
  /** 名字 */
  firstName?: Maybe<Scalars['String']>;
  /** 性別 */
  gender?: Maybe<UserGender>;
  /** 姓氏 */
  lastName?: Maybe<Scalars['String']>;
  /** 用戶暱稱 */
  nickname?: Maybe<Scalars['String']>;
  /** 用戶UUID */
  userUuid: Scalars['ID'];
};

export type UserProfileInput = {
  /** 用戶頭像 */
  avatar?: InputMaybe<Scalars['String']>;
  /** 生日(UTC Timstamp) */
  birthday?: InputMaybe<Scalars['Float']>;
  /** 名字 */
  firstName?: InputMaybe<Scalars['String']>;
  /** 性別 */
  gender?: InputMaybe<UserGender>;
  /** 姓氏 */
  lastName?: InputMaybe<Scalars['String']>;
  /** 用戶暱稱 */
  nickname?: InputMaybe<Scalars['String']>;
};

export type UserRoleEntity = {
  __typename?: 'UserRoleEntity';
  roleUuidList: Array<Scalars['String']>;
  userUuid: Scalars['ID'];
};

export type VendorPricingEntity = {
  __typename?: 'VendorPricingEntity';
  created_at: Scalars['DateTime'];
  media: MediaSize;
  /** 列印(輸出)色彩模式；彩色(COLOR)/黑白(MONOCHROME) */
  print_color_mode: Print_Color_Mode_Enum;
  /** 門店的價格的服務 */
  service: MerchantVendorService;
  /** 該服務之單價 */
  unit_price: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  uuid: Scalars['ID'];
};

export type VendorPricingInput = {
  created_at: Scalars['DateTime'];
  media: MediaSize;
  /** 列印(輸出)色彩模式；彩色(COLOR)/黑白(MONOCHROME) */
  print_color_mode: Print_Color_Mode_Enum;
  /** 門店的價格的服務 */
  service: MerchantVendorService;
  /** 該服務之單價 */
  unit_price: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  uuid: Scalars['ID'];
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    
  };
}
export type Sdk = ReturnType<typeof getSdk>;