import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any,
};


export type Address = {
   __typename?: 'Address',
  /** 城市；ex. 台北 */
  city: Scalars['String'],
  /** 鄉鎮市區 */
  dist: Scalars['String'],
  /** 地址 */
  address: Scalars['String'],
};

export type AddressInput = {
  /** 城市；ex. 台北 */
  city: Scalars['String'],
  /** 鄉鎮市區 */
  dist: Scalars['String'],
  /** 地址 */
  address: Scalars['String'],
};

export type BindLineReqDto = {
  /** Line Login或LIFF之用戶Access Token */
  access_token: Scalars['String'],
};

export type BindResDto = {
   __typename?: 'BindResDto',
  result: Scalars['Boolean'],
};

export type BoolResDto = {
   __typename?: 'BoolResDto',
  result: Scalars['Boolean'],
};

export type CarrierData = {
   __typename?: 'CarrierData',
  /** 載具類別(1: 會員載具, 2: 自然人憑證, 3: 手機條碼) */
  carrierType: Scalars['String'],
  /** 
 * 載具號碼；當載具類別[CarrierType]="1"(綠界科技電子發票載具)時，請帶空字串；當載具類別[CarrierType]="2"(買受人之自然人憑證)時，則請帶固定長度為 16 且格式為 2碼大寫英文字母加上 14 碼數字；當載具類別[CarrierType]="3"(買受人之手機條碼)時，則請帶固定長度為 8 且格式為 1
   * 碼斜線「/」加上 7 碼由數字及大寫英文字母及+-.符號組成的字串
 **/
  carrierNumber: Scalars['String'],
};

export type Contact = {
   __typename?: 'Contact',
  /** 聯絡人姓名 */
  name: Scalars['String'],
  /** 聯絡電話 */
  phoneNumber: Scalars['String'],
};

export type ContactInput = {
  /** 聯絡人姓名 */
  name: Scalars['String'],
  /** 聯絡電話 */
  phoneNumber: Scalars['String'],
};

export type CustomerAddress = {
   __typename?: 'CustomerAddress',
  city: Scalars['String'],
  district: Scalars['String'],
  street: Scalars['String'],
  detailedAddressLine: Scalars['String'],
};

export type CustomerData = {
   __typename?: 'CustomerData',
  customerIdentifier: Scalars['String'],
  /** 客戶名稱(若有輸入統編則為公司名稱) */
  customerName: Scalars['String'],
  /** 地址(如『106 台北市南港區發票一街 1 號 1 樓』) */
  customerAddress: CustomerAddress,
  /** Email地址(電子紙本寄送之Email) */
  customerEmail: Scalars['String'],
  /** 電話(選填) */
  customerPhone: Scalars['String'],
};


export type DeviceModelEntity = {
   __typename?: 'DeviceModelEntity',
  uuid: Scalars['ID'],
  deviceUuid: Scalars['String'],
  manufacture: Scalars['String'],
  model: Scalars['String'],
};

export enum DeviceStatus {
  Normal = 'Normal',
  Abnormal = 'Abnormal'
}

export type DeviceTypeEntity = {
   __typename?: 'DeviceTypeEntity',
  uuid: Scalars['ID'],
  name: Scalars['String'],
};

export type DocumentEntity = {
   __typename?: 'DocumentEntity',
  uuid: Scalars['ID'],
  /** 檔名(用戶上傳文件原文件) */
  filename: Scalars['String'],
  expiredAt: Scalars['DateTime'],
  /** Document處理流程狀態 */
  processStatus: DocumentProcessStatus,
  /** 文檔處理失敗錯誤訊息 */
  processFailedMessage?: Maybe<Scalars['String']>,
  /** Document之各類型File數據 */
  documentFiles?: Maybe<Array<DocumentFileEntity>>,
  /** 用戶上傳文檔總頁數；以轉換後之文件為基準，故需process完畢才會有該值 */
  pages?: Maybe<Scalars['Int']>,
  userUuid: Scalars['String'],
};

export type DocumentFileEntity = {
   __typename?: 'DocumentFileEntity',
  uuid: Scalars['ID'],
  document_uuid: Scalars['String'],
  type: DocumentFileType,
  contentType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Int']>,
  bucketName?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  deletedAt: Scalars['DateTime'],
  deletedOnBucket?: Maybe<Scalars['Boolean']>,
};

export enum DocumentFileType {
  Original = 'ORIGINAL',
  Print = 'PRINT',
  Preview = 'PREVIEW'
}

export enum DocumentProcessStatus {
  WaitingForUploading = 'WAITING_FOR_UPLOADING',
  Uploaded = 'UPLOADED',
  Converting = 'CONVERTING',
  Converted = 'CONVERTED',
  Watermarking = 'WATERMARKING',
  Watermarked = 'WATERMARKED',
  Finished = 'FINISHED',
  Failed = 'FAILED'
}

export type DonationData = {
   __typename?: 'DonationData',
  loveCode: Scalars['String'],
};

export type FacilityDeviceEntity = {
   __typename?: 'FacilityDeviceEntity',
  uuid: Scalars['ID'],
  name: Scalars['String'],
  facilityUuid: Scalars['String'],
  typeUuid: Scalars['String'],
  serialNumber: Scalars['String'],
  status: DeviceStatus,
  statusDetails: Scalars['String'],
  params: Array<Scalars['String']>,
  type: DeviceTypeEntity,
  model: DeviceModelEntity,
};

export enum FacilityStatus {
  Normal = 'Normal',
  Abnormal = 'Abnormal'
}

export type FacilityTypeEntity = {
   __typename?: 'FacilityTypeEntity',
  uuid: Scalars['ID'],
  /** 设备类型名称 */
  name: Scalars['String'],
};

export type GetDeviceListByFacilityUuidResDtoModel = {
   __typename?: 'GetDeviceListByFacilityUuidResDtoModel',
  uuid: Scalars['ID'],
  manufacture: Scalars['String'],
  model: Scalars['String'],
};

export type GetDeviceListByFacilityUuidResDtoType = {
   __typename?: 'GetDeviceListByFacilityUuidResDtoType',
  uuid: Scalars['ID'],
  name: Scalars['String'],
};

export type GetFacilityInfoResDtoAdministrator = {
   __typename?: 'GetFacilityInfoResDtoAdministrator',
  uuid: Scalars['ID'],
  profile: GetFacilityInfoResDtoAdministratorProfile,
};

export type GetFacilityInfoResDtoAdministratorProfile = {
   __typename?: 'GetFacilityInfoResDtoAdministratorProfile',
  nickname: Scalars['String'],
  first_name: Scalars['String'],
  last_name: Scalars['String'],
  gender: UserGender,
  avatar: Scalars['String'],
};

export type GetFacilityInfoResDtoType = {
   __typename?: 'GetFacilityInfoResDtoType',
  uuid: Scalars['ID'],
  name: Scalars['String'],
};

export type GetFacilityInfoResDtoVendor = {
   __typename?: 'GetFacilityInfoResDtoVendor',
  uuid: Scalars['ID'],
  name: Scalars['String'],
  address: Address,
  location: GetFacilityInfoResDtoVendorLocation,
};

export type GetFacilityInfoResDtoVendorLocation = {
   __typename?: 'GetFacilityInfoResDtoVendorLocation',
  longitude: Scalars['Float'],
  latitude: Scalars['Float'],
};

export type GetFacilityListResDtoItem = {
   __typename?: 'GetFacilityListResDtoItem',
  uuid: Scalars['ID'],
  name: Scalars['String'],
  access_key: Scalars['String'],
  access_secret: Scalars['String'],
  status: FacilityStatus,
  status_details: Scalars['String'],
  created_at: Scalars['String'],
  vendor: GetFacilityListResDtoItemVendor,
  type: GetFacilityListResDtoItemType,
  administrator: GetFacilityListResDtoItemAdministrator,
};

export type GetFacilityListResDtoItemAdministrator = {
   __typename?: 'GetFacilityListResDtoItemAdministrator',
  uuid: Scalars['ID'],
  profile: GetFacilityListResDtoItemAdministratorProfile,
};

export type GetFacilityListResDtoItemAdministratorProfile = {
   __typename?: 'GetFacilityListResDtoItemAdministratorProfile',
  nickname: Scalars['String'],
  first_name: Scalars['String'],
  last_name: Scalars['String'],
  gender: UserGender,
  avatar: UserGender,
};

export type GetFacilityListResDtoItemType = {
   __typename?: 'GetFacilityListResDtoItemType',
  uuid: Scalars['ID'],
  name: Scalars['String'],
};

export type GetFacilityListResDtoItemVendor = {
   __typename?: 'GetFacilityListResDtoItemVendor',
  uuid: Scalars['String'],
  name: Scalars['String'],
  address: Address,
  location: GetFacilityListResDtoItemVendorLocation,
};

export type GetFacilityListResDtoItemVendorLocation = {
   __typename?: 'GetFacilityListResDtoItemVendorLocation',
  longitude: Scalars['Float'],
  latitude: Scalars['Float'],
};

/** 開立方式(載具/電子紙本) */
export enum IssueMethod {
  /** 電子紙本 */
  DigitalPrint = 'DIGITAL_PRINT',
  /** 載具(手機條碼/自然人憑證/會員載具等) */
  Carrier = 'CARRIER',
  /** 無(捐贈無需開立方式) */
  None = 'NONE'
}

/** 開立至對象(個人、公司、捐贈) */
export enum IssueTo {
  /** 公司 */
  Company = 'COMPANY',
  /** 個人 */
  Individual = 'INDIVIDUAL',
  /** 捐贈 */
  Donate = 'DONATE'
}

export type JobEntity = {
   __typename?: 'JobEntity',
  /** Job UUID */
  uuid?: Maybe<Scalars['ID']>,
  /** Job(任務)類型 */
  type: JobType,
  configuration: PrintConfiguration,
  state: JobState,
  /** 錯誤訊息 */
  errorMessage?: Maybe<Scalars['String']>,
  /** 文檔 */
  document: DocumentEntity,
  /** 總共輸出頁數數量。由後端計算 */
  quantity?: Maybe<Scalars['Int']>,
};

/** 打印任務狀態 */
export enum JobState {
  /** 用户创建了 job */
  Submitted = 'SUBMITTED',
  /** job绑定了order(已下單) */
  Ordered = 'ORDERED',
  Making = 'MAKING',
  /** job 打印完成 */
  Finished = 'FINISHED',
  /** job 打印失败 */
  Failed = 'FAILED'
}

/** 任務類型 */
export enum JobType {
  /** 打印類型任務 */
  Print = 'PRINT'
}

export type LoginReqDto = {
  identity_type: UserIdentityType,
  identifier: Scalars['String'],
  credential: Scalars['String'],
};

export type LoginResDto = {
   __typename?: 'LoginResDto',
  token: Scalars['String'],
  expires_in: Scalars['Int'],
};

export enum MediaSize {
  /** A4 */
  A4 = 'A4'
}

export type MerchantContactsEntity = {
   __typename?: 'MerchantContactsEntity',
  uuid: Scalars['ID'],
  merchantUuid: Scalars['String'],
  name: Scalars['String'],
  phone: Scalars['String'],
  email: Scalars['String'],
};

export type MerchantVendorEntity = {
   __typename?: 'MerchantVendorEntity',
  uuid: Scalars['ID'],
  /** 门店名称 */
  name: Scalars['String'],
  /** 門店提供之服務 */
  services: Array<MerchantVendorService>,
  merchantUuid: Scalars['String'],
  zipCode: Scalars['String'],
  address: Address,
  location: PostGisGeography,
  images?: Maybe<Array<Scalars['String']>>,
  pricing: Array<VendorPricingEntity>,
  contacts: Contact,
  /** 與用戶坐標之距離 */
  distance?: Maybe<Scalars['Float']>,
};

/** 門店提供之服務 */
export enum MerchantVendorService {
  /** 自助列印 */
  SelfServicePrint = 'SelfServicePrint',
  /** 人工列印 */
  HumanServicePrint = 'HumanServicePrint',
  /** 自助掃描 */
  SelfServiceScan = 'SelfServiceScan',
  /** 人工掃描 */
  HumanServiceScan = 'HumanServiceScan',
  /** 自助影印 */
  SelfServiceCopy = 'SelfServiceCopy',
  /** 人工影印 */
  HumanServiceCopy = 'HumanServiceCopy'
}

export type Mutation = {
   __typename?: 'Mutation',
  updateUserProfile: UserProfile,
  /** 註冊(目前僅支持Email) */
  register: RegisterResDto,
  login: LoginResDto,
  /** 用戶綁定Line */
  bindLine: BindResDto,
  sendEmailAuthCode: BoolResDto,
  sendPhoneAuthCode: BoolResDto,
  /** 綁定或變更Email */
  bindOrChangeEmail: BoolResDto,
  /** 綁定或變更手機號碼 */
  bindOrChangePhone: BoolResDto,
  /** 變更密碼 */
  changePassword: BoolResDto,
  /** 接受訂單(接單) */
  takeOrder: Order,
  /** 拒絕接單 */
  refuseOrder: Order,
  /** 同意訂單退款之申請 */
  approveOrderRefundApplication: Order,
  /** 拒絕訂單退款之申請 */
  rejectOrderRefundApplication: Order,
  /** 訂單退款(管理員/商家手動發起) */
  refundOrder: Order,
};


export type MutationUpdateUserProfileArgs = {
  profile: UserProfileInput
};


export type MutationRegisterArgs = {
  body: RegisterReqDto
};


export type MutationLoginArgs = {
  body: LoginReqDto
};


export type MutationBindLineArgs = {
  body: BindLineReqDto
};


export type MutationSendEmailAuthCodeArgs = {
  email: Scalars['String']
};


export type MutationSendPhoneAuthCodeArgs = {
  phone: Scalars['String']
};


export type MutationBindOrChangeEmailArgs = {
  verificationCode: Scalars['String'],
  email: Scalars['String']
};


export type MutationBindOrChangePhoneArgs = {
  verificationCode: Scalars['String'],
  phone: Scalars['String']
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'],
  oldPassword: Scalars['String']
};


export type MutationTakeOrderArgs = {
  input: TakeOrderInput,
  vedorId: Scalars['String']
};


export type MutationRefuseOrderArgs = {
  input: RefuseOrderInput,
  vedorId: Scalars['String']
};


export type MutationApproveOrderRefundApplicationArgs = {
  applicationUuid: Scalars['String']
};


export type MutationRejectOrderRefundApplicationArgs = {
  rejectedReason: Scalars['String'],
  applicationUuid: Scalars['String']
};


export type MutationRefundOrderArgs = {
  refundOrderInput: RefundOrderInput
};

export type Order = {
   __typename?: 'Order',
  uuid: Scalars['ID'],
  /** 用戶取件時訂單編號 */
  number: Scalars['String'],
  /** 用戶手動輸入取件時之密碼 */
  password: Scalars['String'],
  /** 訂單狀態 */
  state: OrderStateEnum,
  user_uuid: Scalars['String'],
  /** 該訂單用戶 */
  user: UserEntity,
  jobs: Array<JobEntity>,
  /** 單價 */
  unitPrice: Scalars['Float'],
  /** 數量 */
  quantity: Scalars['Float'],
  /** 訂單小計(未稅) */
  subTotal: Scalars['Float'],
  /** 訂單小計(含稅) */
  subTotalWithTax: Scalars['Float'],
  /** 系統修正(增/減)金額 */
  systemModificationAmount: Scalars['Float'],
  /** 訂單總金額 */
  total: Scalars['Float'],
  /** 門店UUID */
  vendorUuid?: Maybe<Scalars['String']>,
  vendor: MerchantVendorEntity,
  receiptBuyer: OrderReceiptBuyerEntity,
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
  /** 該訂單之所有支付單 */
  payments: Array<PaymentEntity>,
  /** 訂單發票 */
  receipt?: Maybe<ReceiptEntity>,
};

export type OrderFilterInput = {
  /** 用戶UUID */
  userUuid?: Maybe<Scalars['String']>,
};

export type OrderReceiptBuyerEntity = {
   __typename?: 'OrderReceiptBuyerEntity',
  uuid: Scalars['ID'],
  /** 開立至對象：個人(individual)/公司(company)/捐贈(donate) */
  issueTo: IssueTo,
  /** 開立方式：電子紙本/載具 */
  issueMethod: IssueMethod,
  /** 根據發票買受人開立方式(Issue Method)對應之數據 */
  data: ReceiptBuyerDataUnion,
  user_uuid: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type OrderRefundApplicationReason = {
   __typename?: 'OrderRefundApplicationReason',
  /** 退款原因代碼 */
  code: Scalars['String'],
  /** 標題 */
  title: Scalars['String'],
  /** 描述 */
  description?: Maybe<Scalars['String']>,
};

export type OrderRefundApplicationReasonInput = {
  /** 退款原因代碼 */
  code: Scalars['String'],
  /** 標題 */
  title: Scalars['String'],
  /** 描述 */
  description?: Maybe<Scalars['String']>,
};

/** 訂單狀態 */
export enum OrderStateEnum {
  /** 待支付 */
  ArrangingPayment = 'ArrangingPayment',
  /** 已支付(未請款) */
  PaymentAuthorized = 'PaymentAuthorized',
  /** 已支付(已請款) */
  PaymentSettled = 'PaymentSettled',
  /** 待接單 */
  TakingOrder = 'TakingOrder',
  /** 拒絕接單 */
  RefuseTakingOrder = 'RefuseTakingOrder',
  /** 商家已接單 */
  OrderTaken = 'OrderTaken',
  /** 製作中 */
  Producing = 'Producing',
  /** 待取件 */
  PickingUp = 'PickingUp',
  /** 退款申請中 */
  ApplyingRefund = 'ApplyingRefund',
  RefundApplicationRefused = 'RefundApplicationRefused',
  /** 退款中 */
  Refunding = 'Refunding',
  /** 已退款 */
  Refunded = 'Refunded',
  /** 已取消 */
  Cancelled = 'Cancelled',
  /** 已完成 */
  Completed = 'Completed'
}

export enum Orientation_Enum {
  /** 直式 */
  Portrait = 'PORTRAIT',
  /** 橫式 */
  Landscape = 'LANDSCAPE'
}

export type PaymentEntity = {
   __typename?: 'PaymentEntity',
  uuid: Scalars['String'],
  /** 支付方式 */
  method: PaymentMethodEnum,
  /** 金額 */
  amount: Scalars['Float'],
  /** 支付單狀態 */
  state: PaymentState,
  /** 退款數據 */
  refunds: Array<Refund>,
  /** 支付時間 */
  paidAt?: Maybe<Scalars['DateTime']>,
  paymentUrl: Scalars['String'],
};

/** 支付方式 */
export enum PaymentMethodEnum {
  /** Line Pay */
  TappayLinePay = 'TAPPAY_LINE_PAY',
  /** 街口支付 */
  TappayJkoPay = 'TAPPAY_JKO_PAY',
  /** Apple Pay */
  TappayApplePay = 'TAPPAY_APPLE_PAY',
  /** 悠遊付 */
  TappayEasyWallet = 'TAPPAY_EASY_WALLET'
}

/** 支付狀態 */
export enum PaymentState {
  /** 已創建 */
  Created = 'Created',
  /** 已支付(未請款) */
  Authorized = 'Authorized',
  /** 已支付(已請款) */
  Settled = 'Settled',
  /** 已退款 */
  Refunded = 'Refunded',
  /** 已拒絕 */
  Declined = 'Declined',
  /** 錯誤 */
  Error = 'Error'
}

export type PlatformAnnouncementEntity = {
   __typename?: 'PlatformAnnouncementEntity',
  uuid: Scalars['ID'],
  title: Scalars['String'],
  content: Scalars['String'],
  publish_time: Scalars['DateTime'],
  if_cancel: Scalars['Boolean'],
  canceled_at: Scalars['DateTime'],
  deleted: Scalars['Boolean'],
  priority: Scalars['Float'],
};

export type PlatformAnnouncementUserEntity = {
   __typename?: 'PlatformAnnouncementUserEntity',
  uuid: Scalars['ID'],
  if_read: Scalars['Boolean'],
  read_time: Scalars['DateTime'],
  announcement_uuid: Scalars['String'],
  announcement: PlatformAnnouncementEntity,
  user_uuid: Scalars['String'],
};

export type PostGisGeography = {
   __typename?: 'PostGisGeography',
  type: Scalars['String'],
  coordinates: Array<Scalars['Float']>,
};

export type PostGisGeographyInput = {
  type: Scalars['String'],
  coordinates: Array<Scalars['Float']>,
};

export enum Print_Color_Mode_Enum {
  /** 彩色 */
  Color = 'COLOR',
  /** 黑白(灰階) */
  Monochrome = 'MONOCHROME'
}

export type PrintConfiguration = {
   __typename?: 'PrintConfiguration',
  /** 輸出色彩模式 */
  print_color_mode: Print_Color_Mode_Enum,
  /** 單/雙面 */
  sides: Sides,
  /** 紙張Size */
  media_size: MediaSize,
  /** 輸出範圍； ex. "1-3" */
  pageRanges: Array<Scalars['String']>,
  /** 輸出方向 */
  orientation: Orientation_Enum,
  /** 單張多(n)頁；n可為1,2,4,6,9,16；目前僅支持1 */
  pagesPerSheet?: Maybe<Scalars['Int']>,
  /** 副本份數 */
  copies?: Maybe<Scalars['Int']>,
};

export type PrintConfigurationInput = {
  /** 輸出色彩模式 */
  print_color_mode: Print_Color_Mode_Enum,
  /** 單/雙面 */
  sides: Sides,
  /** 紙張Size */
  media_size: MediaSize,
  /** 輸出範圍； ex. "1-3" */
  pageRanges: Array<Scalars['String']>,
  /** 輸出方向 */
  orientation: Orientation_Enum,
  /** 單張多(n)頁；n可為1,2,4,6,9,16；目前僅支持1 */
  pagesPerSheet?: Maybe<Scalars['Int']>,
  /** 副本份數 */
  copies?: Maybe<Scalars['Int']>,
};

export type Query = {
   __typename?: 'Query',
  userPreference: UserPreferenceEntity,
  myProfile: UserProfile,
  /** 用戶數據 */
  me: UserEntity,
  vendor: MerchantVendorEntity,
  /** 返回所有門店列表 */
  vendors?: Maybe<Array<MerchantVendorEntity>>,
  /** 獲取訂單列表 */
  orders: Array<Order>,
};


export type QueryUserPreferenceArgs = {
  id: Scalars['String']
};


export type QueryVendorArgs = {
  uuid: Scalars['String']
};


export type QueryVendorsArgs = {
  longitude: Scalars['Float'],
  latitude: Scalars['Float']
};


export type QueryOrdersArgs = {
  filter: OrderFilterInput,
  vendorId: Scalars['String']
};

export type ReceiptAllowanceEntity = {
   __typename?: 'ReceiptAllowanceEntity',
  receipt: ReceiptEntity,
  /** 開立折讓原因 */
  reasons?: Maybe<Scalars['String']>,
};

export type ReceiptBuyer = {
   __typename?: 'ReceiptBuyer',
  uuid: Scalars['ID'],
  /** 開立至對象：個人(individual)/公司(company)/捐贈(donate) */
  issueTo: IssueTo,
  /** 開立方式：電子紙本/載具 */
  issueMethod: IssueMethod,
  /** 根據發票買受人開立方式(Issue Method)對應之數據 */
  data: ReceiptBuyerDataUnion,
  user_uuid: Scalars['String'],
  createdAt?: Maybe<Scalars['DateTime']>,
  updatedAt?: Maybe<Scalars['DateTime']>,
};

export type ReceiptBuyerDataUnion = CustomerData | CarrierData | DonationData;

export type ReceiptEntity = {
   __typename?: 'ReceiptEntity',
  /** Unique Identifier */
  uuid: Scalars['String'],
  /** Order UUID */
  order_uuid: Scalars['String'],
  /** Payment UUID */
  payment_uuid: Scalars['String'],
  /** 發票號碼 */
  receipt_number: Scalars['String'],
  /** 發票隨機碼 */
  receipt_random_number: Scalars['String'],
  /** 發票開立品項明細 */
  receiptItems: Array<ReceiptItem>,
  /** 開立時間 */
  issueAt: Scalars['DateTime'],
  /** 通知用戶開立時間 */
  issueNotifiedAt?: Maybe<Scalars['DateTime']>,
  /** 作廢時間 */
  issueInvalidAt?: Maybe<Scalars['DateTime']>,
  /** 作廢原因 */
  issueInvalidReason?: Maybe<Scalars['String']>,
  /** 通知用戶作廢時間 */
  issueInvalidNotifiedAt?: Maybe<Scalars['DateTime']>,
  /** 發票總金額 */
  total_amount: Scalars['Float'],
  /** 發票開立狀態 */
  status: ReceiptStateEnum,
  /** 買受人資訊(電子發票開立資訊) */
  receipt_buyer: ReceiptBuyer,
  /** 折讓單 */
  allowances?: Maybe<Array<ReceiptAllowanceEntity>>,
};

export type ReceiptItem = {
   __typename?: 'ReceiptItem',
  /** 品項名稱 */
  name: Scalars['String'],
  /** 數量 */
  quantity: Scalars['Float'],
  /** 計算單位(ex. 張/次) */
  unit: Scalars['String'],
  /** 單價 */
  unitPrice: Scalars['Float'],
  /** 總價 */
  amount: Scalars['Float'],
  /** 總價(含稅) */
  amountWithTax: Scalars['Float'],
};

/** 發票狀態 */
export enum ReceiptStateEnum {
  /** 已開立 */
  Issued = 'ISSUED',
  /** 已作廢 */
  IssueInvalided = 'ISSUE_INVALIDED',
  /** 已開立折讓 */
  Allowance = 'ALLOWANCE',
  /** 已作廢折讓 */
  AllowanceInvalided = 'ALLOWANCE_INVALIDED'
}

export type Refund = {
   __typename?: 'Refund',
  /** ID */
  uuid: Scalars['String'],
  /** 支付單ID */
  paymentId: Scalars['String'],
  /** 退款總額 */
  total: Scalars['Float'],
  /** 退款原因 */
  reason: Scalars['String'],
  /** 退款狀態 */
  state: RefundState,
  /** 退款交易流水號 */
  transactionId: Scalars['String'],
  /** 支付單數據 */
  payment: PaymentEntity,
  /** 退款失敗/錯誤訊息 */
  errorMessage: Scalars['String'],
  /** 退款時間(API請求失敗時間) */
  refundFailedAt?: Maybe<Scalars['DateTime']>,
  /** 退款時間(API請求成功時間) */
  refundedAt?: Maybe<Scalars['DateTime']>,
};

export type RefundOrderInput = {
  /** 訂單ID(UUID) */
  orderId: Scalars['String'],
  /** 退款原因 */
  reason?: Maybe<Scalars['String']>,
};

/** 退款狀態 */
export enum RefundState {
  /** 待退款 */
  Pending = 'Pending',
  /** 退款中(平台/商家處理中) */
  Processing = 'Processing',
  /** 退款中(銀行退款作業中) */
  Authorized = 'Authorized',
  /** 已退款 */
  Settled = 'Settled',
  /** 退款失敗 */
  Failed = 'Failed'
}

export type RefuseOrderInput = {
  /** 訂單ID(UUID) */
  orderId: Scalars['String'],
  /** 拒絕原因 */
  reason?: Maybe<Scalars['String']>,
};

export type RegisterReqDto = {
  /** 註冊身份類型(email/phone)，目前只支持email */
  identity_type: UserIdentityType,
  /** 身份類型之識別碼(email/phone) */
  identifier: Scalars['String'],
  /** 密碼 */
  credential: Scalars['String'],
  /** 驗證碼 */
  code: Scalars['String'],
  profile?: Maybe<RegisterReqDtoProfile>,
};

export type RegisterReqDtoProfile = {
  nickname?: Maybe<Scalars['String']>,
  first_name?: Maybe<Scalars['String']>,
  last_name?: Maybe<Scalars['String']>,
  gender?: Maybe<UserGender>,
  /** 生日(UTC Timstamp) */
  birthday?: Maybe<Scalars['Int']>,
  avatar?: Maybe<Scalars['String']>,
};

export type RegisterResDto = {
   __typename?: 'RegisterResDto',
  token: Scalars['String'],
  expires_in: Scalars['Int'],
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
  orderId: Scalars['String'],
};

export type UserAuthLocal = {
   __typename?: 'UserAuthLocal',
  /** 所属用户uuid */
  userUuid: Scalars['ID'],
  /** username */
  username?: Maybe<Scalars['String']>,
  /** Email */
  email?: Maybe<Scalars['String']>,
  /** 用户手機號 */
  phone?: Maybe<Scalars['String']>,
};

export type UserAuthThirdParty = {
   __typename?: 'UserAuthThirdParty',
  uuid: Scalars['ID'],
  userUuid: Scalars['String'],
  /** 第三方登陸之平台 */
  identityType: UserIdentityType,
  /** 第三方登陸身份標示 */
  identifier: Scalars['String'],
};

export type UserEntity = {
   __typename?: 'UserEntity',
  uuid: Scalars['ID'],
  profile: UserProfile,
  preference: UserPreferenceEntity,
  userRole: UserRoleEntity,
  /** 登入訊息 */
  authLocal: UserAuthLocal,
  /** 第三方登入訊息 */
  authThirdParty: Array<UserAuthThirdParty>,
  platformAnnouncementUserList: Array<PlatformAnnouncementUserEntity>,
};

export enum UserGender {
  Male = 'male',
  Female = 'female'
}

export enum UserIdentityType {
  /** Email */
  Email = 'email',
  /** 行動電話號碼 */
  Phone = 'phone',
  /** Line */
  Line = 'line'
}

export type UserPreferenceEntity = {
   __typename?: 'UserPreferenceEntity',
  userUuid: Scalars['ID'],
  language: UserPreferenceLanguage,
};

export enum UserPreferenceLanguage {
  ZhCn = 'ZH_CN',
  ZhTw = 'ZH_TW',
  ZhHk = 'ZH_HK'
}

export type UserProfile = {
   __typename?: 'UserProfile',
  /** 用戶UUID */
  userUuid: Scalars['ID'],
  /** 用戶暱稱 */
  nickname?: Maybe<Scalars['String']>,
  /** 名字 */
  firstName?: Maybe<Scalars['String']>,
  /** 姓氏 */
  lastName?: Maybe<Scalars['String']>,
  /** 性別 */
  gender?: Maybe<UserGender>,
  /** 生日(UTC Timstamp) */
  birthday?: Maybe<Scalars['Float']>,
  /** 用戶頭像 */
  avatar?: Maybe<Scalars['String']>,
};

export type UserProfileInput = {
  /** 用戶暱稱 */
  nickname?: Maybe<Scalars['String']>,
  /** 名字 */
  firstName?: Maybe<Scalars['String']>,
  /** 姓氏 */
  lastName?: Maybe<Scalars['String']>,
  /** 性別 */
  gender?: Maybe<UserGender>,
  /** 生日(UTC Timstamp) */
  birthday?: Maybe<Scalars['Float']>,
  /** 用戶頭像 */
  avatar?: Maybe<Scalars['String']>,
};

export type UserRoleEntity = {
   __typename?: 'UserRoleEntity',
  userUuid: Scalars['ID'],
  roleUuidList: Array<Scalars['String']>,
};

export type VendorPricingEntity = {
   __typename?: 'VendorPricingEntity',
  uuid: Scalars['ID'],
  /** 門店的價格的服務 */
  service: MerchantVendorService,
  media: MediaSize,
  /** 列印(輸出)色彩模式；彩色(COLOR)/黑白(MONOCHROME) */
  print_color_mode: Print_Color_Mode_Enum,
  /** 該服務之單價 */
  unit_price: Scalars['Float'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};

export type VendorPricingInput = {
  uuid: Scalars['ID'],
  /** 門店的價格的服務 */
  service: MerchantVendorService,
  media: MediaSize,
  /** 列印(輸出)色彩模式；彩色(COLOR)/黑白(MONOCHROME) */
  print_color_mode: Print_Color_Mode_Enum,
  /** 該服務之單價 */
  unit_price: Scalars['Float'],
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};

export type MeQueryVariables = {};


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserEntity' }
    & Pick<UserEntity, 'uuid'>
  ) }
);


export const MeDocument = gql`
    query me {
  me {
    uuid
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    me(variables?: MeQueryVariables): Promise<MeQuery> {
      return client.request<MeQuery>(print(MeDocument), variables);
    }
  };
}