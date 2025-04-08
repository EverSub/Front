import { Service, Option } from '../types';

export const dummyServices: Service[] = [
  {
    id: 'netflix',
    logo: '/logos/netflix.svg',
    name: '넷플릭스',
    english_name: 'Netflix',
    description: '영화, 시리즈, 예능까지 다양한 콘텐츠 제공',
    genre: '종합',
  },
  {
    id: 'disney',
    logo: '/logos/disney.svg',
    name: '디즈니 플러스',
    english_name: 'Disney+',
    description: '마블, 픽사, 디즈니 클래식까지 한 곳에서',
    genre: '디즈니/히어로',
  },
  {
    id: 'watcha',
    logo: '/logos/watcha.svg',
    name: '왓챠',
    english_name: 'Watcha',
    description: '국내외 독립 영화 및 예술영화 강세',
    genre: '인디/예술',
  },
];

export const dummyOptions: Option[] = [
  // 넷플릭스
  {
    id: 'netflix-basic',
    service_id: 'netflix',
    name: 'Basic',
    monthly_price: 9500,
    yearly_price: 95000,
    opt_description: '480p 화질, 한 명 시청',
  },
  {
    id: 'netflix-standard',
    service_id: 'netflix',
    name: 'Standard',
    monthly_price: 13500,
    yearly_price: 135000,
    opt_description: '1080p 화질, 두 명 동시 시청',
  },
  {
    id: 'netflix-premium',
    service_id: 'netflix',
    name: 'Premium',
    monthly_price: 17000,
    yearly_price: 170000,
    opt_description: '4K 화질, 네 명 동시 시청',
  },

  // 디즈니 플러스
  {
    id: 'disney-standard',
    service_id: 'disney',
    name: 'Standard',
    monthly_price: 9900,
    yearly_price: 99000,
    opt_description: '최대 2명 시청, 광고 없음',
  },
  {
    id: 'disney-premium',
    service_id: 'disney',
    name: 'Premium',
    monthly_price: 13900,
    yearly_price: 139000,
    opt_description: '최대 4명 시청, 4K 지원',
  },

  // 왓챠
  {
    id: 'watcha-basic',
    service_id: 'watcha',
    name: 'Basic',
    monthly_price: 7900,
    yearly_price: 79000,
    opt_description: '1명 시청, 고화질',
  },
  {
    id: 'watcha-premium',
    service_id: 'watcha',
    name: 'Premium',
    monthly_price: 10900,
    yearly_price: 109000,
    opt_description: '최대 4명 시청, 초고화질',
  },
];