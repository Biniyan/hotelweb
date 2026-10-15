export type DietaryType = 'veg' | 'non-veg' | 'jain' | 'vegan';

export type SpiceLevel = 0 | 1 | 2 | 3; // 0: Mild, 1: Medium, 2: Spicy, 3: Desi Hot

export type MenuSectionType = 'all_day' | 'lunch' | 'bar';

export type MenuCategoryType =
  | 'all'
  | 'starters'
  | 'curries'
  | 'biryani'
  | 'breads'
  | 'desserts'
  | 'beverages'
  | 'lunch_thali'
  | 'lunch_bowls'
  | 'kathi_wraps'
  | 'craft_cocktails'
  | 'indian_beers'
  | 'wines'
  | 'mocktails';

export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  menuSection?: MenuSectionType;
  category: MenuCategoryType;
  description: string;
  price: number;
  halfPrice?: number;
  dietary: DietaryType;
  spiceLevel: SpiceLevel;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  image: string;
  prepTimeMinutes: number;
  calories?: number;
  allergens?: string[];
  volumeOrServing?: string;
  alcoholPercentage?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'dishes' | 'ambiance' | 'tandoor' | 'bar';
  image: string;
  caption: string;
}

export interface CateringInquiry {
  fullName: string;
  email: string;
  phone: string;
  eventType: 'wedding' | 'corporate' | 'private_party' | 'puja_festival';
  eventDate: string;
  guestCount: number;
  packageType: 'royal_banquet' | 'maharaja_feast' | 'cocktail_social';
  customNotes?: string;
}

export interface JobPosition {
  id: string;
  title: string;
  department: 'Culinary' | 'Hospitality & Service' | 'Bar & Mixology' | 'Operations';
  location: string;
  type: 'Full-Time' | 'Part-Time';
  experienceRequired: string;
  description: string;
  requirements: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Dining & Reservations' | 'Online Orders & Delivery' | 'Food & Dietary' | 'Events & Catering';
}

export interface AllergenRow {
  dishName: string;
  menuSection: MenuSectionType;
  dietary: DietaryType;
  glutenFree: boolean;
  dairyFree: boolean;
  nutFree: boolean;
  vegan: boolean;
  jainFriendly: boolean;
  notes?: string;
}

export interface CartItem {
  cartItemId: string;
  menuItem: MenuItem;
  quantity: number;
  portion: 'full' | 'half';
  spiceLevel: SpiceLevel;
  specialInstructions?: string;
  itemTotal: number;
}

export interface LocationCoordinates {
  lat: number;
  lng: number;
  addressLabel: string;
  accuracyMeters?: number;
}

export interface GeofenceConfig {
  restaurantName: string;
  restaurantAddress: string;
  center: LocationCoordinates;
  maxDeliveryRadiusKm: number;
  maxDineInRadiusMeters: number;
}

export interface GeofenceState {
  userCoords: LocationCoordinates | null;
  distanceKm: number | null;
  distanceMeters: number | null;
  isInsideDeliveryRadius: boolean;
  isInsideDineInRadius: boolean;
  status: 'idle' | 'requesting' | 'granted' | 'denied' | 'simulated';
  errorMessage: string | null;
  lastCheckedAt: string | null;
}

export interface CloudflareTurnstileState {
  status: 'unverified' | 'verifying' | 'verified' | 'challenge_required' | 'failed';
  token: string | null;
  cfRayId: string | null;
  botScore: number; // 0.00 (definitely human) to 1.00 (bot)
  verifiedAt: string | null;
  challengeType: 'managed' | 'interactive' | 'invisible';
}

export type BookingType = 'delivery' | 'dine_in' | 'takeaway';

export interface TableBookingDetails {
  date: string;
  timeSlot: string;
  guestsCount: number;
  seatingArea: 'Main Dining Hall' | 'Royal Heritage Courtyard' | 'Private Maharaja Baithak' | 'Rooftop Terrace';
  guestName: string;
  guestPhone: string;
  specialRequests?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  createdAt: string;
  bookingType: BookingType;
  items: CartItem[];
  subtotal: number;
  gstAmount: number;
  deliveryFee: number;
  discountAmount: number;
  discountCode?: string;
  grandTotal: number;
  customer: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
    tableNumber?: string;
  };
  tableDetails?: TableBookingDetails;
  paymentMethod: 'upi' | 'card' | 'cod' | 'pay_at_counter';
  paymentStatus: 'paid' | 'pending';
  orderStatus: 'placed' | 'confirmed' | 'cooking' | 'out_for_delivery' | 'ready_at_table' | 'completed';
  geofenceVerification: {
    verified: boolean;
    distanceKm: number;
    userLocationLabel: string;
  };
  turnstileToken: string;
  estimatedTimeMinutes: number;
}

export interface UserProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  photoURL?: string;
  authProvider?: 'google' | 'phone' | 'guest';
  isLoggedIn: boolean;
  savedAddresses: string[];
  loyaltyPoints: number;
  recentOrdersCount: number;
}
