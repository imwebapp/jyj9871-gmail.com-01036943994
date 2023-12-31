export * from './location'

export const ROUTE_API = {
	LOGIN: '/auth/login',
	LOGIN_FACEBOOK: '/auth/login_with_facebook',
	LOGIN_GOOGLE: '/auth/login_with_google',
	LOGIN_KAKAO_TALK: '/auth/login_with_kakaotalk',
	LOGIN_NAVER: '/auth/login_with_naver',
	CHECK_EXIST_PHONE_NUMBER: 'auth/phone_number',
	REGISTER: '/auth/register',
	FOTGET_PASSWORD: '/auth/forget_password',
	RESET_PASSWORD: '/auth/reset_password',
	JUMP_UP_SHOP: '/shop/setup_jump_up',
	JUMP_UP_SHOP_REMOVE: '/shop/remove_jump_up',
	JUMP_UP_SHOP_TURN_OFF: '/shop/turn_off_jump_up',
	JUMP_UP_SHOP_TURN_ON: '/shop/turn_on_jump_up',
	SHOP: '/shop',
	SHOP_GET_LISTS: '/shop/get_lists',
	SHOP_CREATE: '/shop/create_shop',
	SHOP_LIKE: '/shop/like_shop',
	SHOP_UNLIKE: '/shop/unlike_shop',
	SHOP_GET_MASTER_SHOP: '/shop/get_master_shop',
	SHOP_GET_NEAR_SHOP_MAP: '/shop/get_near_shop_map',
	SHOP_GET_NEAR_SHOP: '/shop/get_near_shop',
	SHOP_SALES: '/shop-sales',
	SHOP_SALES_GET_LISTS: '/shop-sales/get_lists',
	SHOP_SALES_CREATE: '/shop-sales/create_shop',
	SHOP_SALES_LIKE: '/shop-sales/like_shop',
	SHOP_SALES_UNLIKE: '/shop-sales/unlike_shop',
	SHOP_JUMP_UP: '/shop/jump-up',
	SHOP_JUMP_UP_HISTORY: '/history/get_user_shop_jump_up_histories',
	RECRUIT2: '/recruit2',
	RECRUIT_GET_LISTS2: '/recruit2/get_lists',
	RECRUIT: '/recruit',
	RECRUIT_GET_LISTS: '/recruit/get_lists',
	RECRUIT_CREATE: '/recruit/',
	RECRUIT_LIKE: '/recruit/like',
	RECRUIT_UNLIKE: '/recruit/unlike',
	EVENT: '/event',
	EVENT_GET_LISTS: '/event/get_lists',
	EVENT_CREATE: '/event/create_event',
	LINK: '/link',
	FAVORITE: '/favourite',
	FAVORITE_GET_LISTS: '/favourite/get_lists',
	SETTING: '/setting',
	CATEGORY: '/category',
	SETTING_USER_PERMISSION: '/setting_user_permission',
	REVIEW: '/review',
	REVIEW_REMOVE: '/review/soft_delete',
	REVIEW_GET_LIST: '/review/get_lists',
	REVIEW_GET_LIST_INCLUDE_BLOCK: '/review/get_list_include_block',
	REVIEW_GET_LIST_FOR_SHOP: '/review/get_list_for_shop',
	REVIEW_REMOVE_ALL: '/review/soft_delete_all',
	USER: '/user',
	USER_ROLL_GIFT: '/user/roll_gift',
	USER_GET_TOP_50_RANKING: '/user/get_top_50_ranking',
	CHANGE_PASSWORD: '/user/change_password',
	SUBSCRIBE_TO_TOPIC: '/user/subscribe_to_topic',
	UNSUBSCRIBE_FROM_TOPIC: '/user/unsubscribe_from_topic',
	IMAGE_UPLOAD: '/image/upload',
	IMAGE_MULTIPLE_UPLOAD: '/image/upload_multiple',
	BANNER: '/banner',
	CONTENT: '/content',
	LEVEL_GET_USER_EARNING_HISTORIES: '/history/get_user_exp_earning_histories',
	NOTIFICATION: '/notification',
	NOTIFICATION_REMOVE_ALL: '/notification/user_delete_all',
	THEMA: '/thema',
	CONTACT: '/contact',
	TAG: '/tag',
	POST: '/post',
	POST_GET_LIST: '/post/get_lists',
	POST_VIEW_POST: '/post/view_post',
	POST_LIKE: '/post/like_post',
	POST_REPORT: '/post/report_post',
	POST_UNREPORT: '/post/unreport',
	POST_REPORT_COMMENT: '/review/report',
	POST_UNLIKE: '/post/unlike_post',
	POST_DISLIKE: '/post/dislike_post',
	POST_UNDISLIKE: '/post/undislike_post',
	RECENT_READING: '/recent_reading',
	RECENT_READING_GET_LIST: '/recent_reading/get_lists',
	COMMENT: '/comment',
	COMMENT_GET_LISTS: '/comment/get_lists',
	RECORD_CHECK_IN_APP: '/record/check_in_app',
	LANG_IP: 'https://ipinfo.io/',
	AUTH_GET_LOCALE: '/auth/get_locale',
	GET_LOCALE_INFO: '/user/get_location_info',
	FAQ_CATEGORY: '/faq_category',
	FAQ: '/faq',
	CITY: '/city',
	DISTRICT: '/district',
	K_LOCATION: '/location',
	COURSE: '/course',
	SET_COURSE: '/set_courses',
	SET_RECOMMENDED_COURSE: '/set_recommended',
	PRICE: '/price',
	MENTOR: '/mentor',
	SET_MENTOR: '/set_mentor',
	LIKE_MENTOR: '/like_mentor',
	UNLIKE_MENTOR: '/unlike_mentor',
	LOYALTY: '/loyalty',
	ADMIN_SETTING: '/setting_admin',
	RESERVATION: '/reservation',
	QUESTION: '/question',
	ANSWER_QUESTION: '/answer_question',
	TICKET_USED: '/ticket_used',
	CONVERSATION: '/conversation',
	MESSAGE: '/message',
	GOOGLE: '/google',
	POINT: '/point',
	POINT_PRODUCT: '/point_product',
	FEEDBACK: '/feedback',
	FEEDBACK_ITEM: '/feedback_item',
	SEO_SSR: '/seo_ssr',
	BLOG: '/blog',
}

export const MY_LIST_STATE = {
	PENDING: 'PENDING',
	APPROVED: 'APPROVED',
	REJECTED: 'REJECTED',
	EXPIRED: 'EXPIRED',
}

export const BOARD = {
	SHOP_LIST_BOARD: 'SHOP_LIST_BOARD',
	DISTANCE_ORDER_BOARD: 'DISTANCE_ORDER_BOARD',
	DISTANCE_ORDER_BOARD_2: 'DISTANCE_ORDER_BOARD_2',
	EVENT_BOARD: 'EVENT_BOARD',
	BULLETIN_BOARD: 'BULLETIN_BOARD',
	RECRUIT_BOARD: 'RECRUIT_BOARD',
	RECRUIT_BOARD_2: 'RECRUIT_BOARD_2',
	SHOP_SALES_BOARD: 'SHOP_SALES_BOARD',
	JUMP_UP_SHOP_LIST_BOARD: 'JUMP_UP_SHOP_LIST_BOARD',
	BLOG: 'BLOG',
}

export const ROUTE = {
	SHOP: '/shop',
	SHOP_SECOND: '/jump-up-shop',
	EVENT: '/event',
	POST: '/post',
	BLOG: '/blog',
}

export const BOARD_ROUTE = {
	[BOARD.DISTANCE_ORDER_BOARD]: ROUTE.SHOP,
	[BOARD.DISTANCE_ORDER_BOARD_2]: ROUTE.SHOP,
	[BOARD.JUMP_UP_SHOP_LIST_BOARD]: ROUTE.SHOP_SECOND,
	[BOARD.EVENT_BOARD]: ROUTE.EVENT,
	[BOARD.BULLETIN_BOARD]: ROUTE.POST,
	[BOARD.BLOG]: ROUTE.BLOG,
}

export const LOGIN_TYPE = {
	IN_APP: 'INAPP',
	GOOGLE: 'GOOGLE',
	FACEBOOK: 'FACEBOOK',
	KAKAO: 'KAKAO',
	NAVER: 'NAVER',
	APPLE: 'APPLE',
}

export const ACCOUNT_TYPE = {
	FREE_USER: 'FREE_USER',
	BIZ_USER: 'BIZ_USER',
}

export const DEFAULT_LOCATION = {
	lat: 37.49817152342137,
	lng: 127.02766481905506,
}

export const TYPE_COMPANY_INFO = {
	TERM_OF_SERVICE: 'terms-of-service',
	POLICY: 'policy',
	LOCATION_BASE_SERVICES: 'location-based-services',
	COMPANY_INPFO: 'company-info',
}

export const SETTING_TYPE = {
	KAKAO_TALK_OPEN_CHAT_URL: 'KAKAO_TALK_OPEN_CHAT_URL',
	LOCATION: 'LOCATION',
	CH_PLAY_LINK: 'CH_PLAY_LINK',
	SHOP_LIST_BOARD_COLUMN: 'SHOP_LIST_BOARD_COLUMN',
	APP_STORE_LINK: 'APP_STORE_LINK',
	PHONE_NUMBER: 'PHONE_NUMBER',
	FORBIDDEN_WORDS: 'FORBIDDEN_WORDS',
	EVENT_SCRIPT_KR: 'EVENT_SCRIPT_KR',
	EARNING_POINT: 'EARNING_POINT',
	LEVEL_LIST: 'LEVEL_LIST',
	EVENT_SCRIPT: 'EVENT_SCRIPT',
	APP_ICON: 'APP_ICON',
	APP_SCRIPT: 'APP_SCRIPT',
	APP_NAME: 'APP_NAME',
	DISTANCE_ORDER_BOARD_2_OPTION: 'DISTANCE_ORDER_BOARD_2_OPTION',
	SHOP_LIST_BOARD_SHOW_OPTION: 'SHOP_LIST_BOARD_SHOW_OPTION',
	DISTANCE_ORDER_BOARD_OPTION: 'DISTANCE_ORDER_BOARD_OPTION',
}
