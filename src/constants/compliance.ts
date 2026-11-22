// Owner confirmed 2026-11-22: gappeyindia@gmail.com is the real, monitored support and grievance mailbox (the gappey.in mailboxes do not exist).
/**
 * Single source of truth for Gappey business identity and compliance constants.
 * Registered enterprise name and unit "Gappey" exactly as on the Udyam Registration Certificate
 * (UDYAM-WB-18-0228614, Kolkata, West Bengal).
 */

export const BUSINESS_IDENTITY = {
  enterpriseName: "PRITAMI",
  unitName: "Gappey",
  registrationNumber: "UDYAM-WB-18-0228614",
  enterpriseType: "Micro (Services)",
  city: "Kolkata",
  state: "West Bengal",
  pinCode: "700141",
  country: "India",
  nicCode: "58202 (Publishing of operating business and other applications)",
  registeredAddress: "Kolkata, West Bengal, PIN 700141, India",
} as const;

/**
 * Official compliance email and contact points.
 * All customer support, grievance, and legal inquiries are handled through these channels.
 */
export const SUPPORT_EMAIL = "gappeyindia@gmail.com";
export const SUPPORT_PHONE = ""; // Owner must supply if approved to publish
export const GRIEVANCE_EMAIL = "gappeyindia@gmail.com";
/** Name of the Grievance Officer shown on the Privacy page (IT Rules 2021 require a named officer). OWNER MUST SUPPLY; hidden while empty. */
export const GRIEVANCE_OFFICER_NAME = "Paramita Majumder Das";
export const LAST_UPDATED_DATE = "November 22, 2026";
