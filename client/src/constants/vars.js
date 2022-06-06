export const ACCESS_TOKEN_CHEANGE_TIME = 1000 * 60 * 4.5;
export const TOKEN_SPACE_WORD = "JWT";

// ------------------------- Google Auth -------------------------
const GOOGLE_AUTH_BASE_URL = "https://accounts.google.com/o/oauth2/v2/auth";
export const GOOGLE_AUTH_SCOPE_PROFILE_URL =
  "https://www.googleapis.com/auth/userinfo.profile";
export const GOOGLE_AUTH_SCOPE_EMAIL_URL =
  "https://www.googleapis.com/auth/userinfo.email";
const GOOGLE_AUTH_SCOPE_OPEN_ID = "openid";
const GOOGLE_AUTH_REDIRECT_URL = "https://makeclient.ngrok.io/login";
export const GOOGLE_AUTH_URL = `${GOOGLE_AUTH_BASE_URL}?scope=${GOOGLE_AUTH_SCOPE_PROFILE_URL} ${GOOGLE_AUTH_SCOPE_EMAIL_URL} ${GOOGLE_AUTH_SCOPE_OPEN_ID}&access_type=offline&include_granted_scopes=true&response_type=code&state=state_parameter_passthrough_value&redirect_uri=${GOOGLE_AUTH_REDIRECT_URL}&client_id=${process.env.GOOGLE_AUTH_CLIENT_ID}`;

// ------------------------- Microsoft Auth -------------------------
const MICROSOFT_AUTH_BASE_URL = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
const MICROSOFT_AUTH_REDIRECT_URL = "https://makeclient.ngrok.io/login";
export const MICROSOFT_AUTH_URL = `${MICROSOFT_AUTH_BASE_URL}?client_id=${process.env.MICROSOFT_AUTH_CLIENT_ID}&scope=openid email profile&response_type=code&redirect_uri=${MICROSOFT_AUTH_REDIRECT_URL}`;
// ---------------------------------------------------------------------------
