import withBase from "../shared/utils/asset";

export const SITE_NAME = "Stanley Shen";
export const SITE_BASE = import.meta.env.BASE_URL ?? "/";
export const buildAsset = withBase;
