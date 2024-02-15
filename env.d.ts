/// <reference types="vite/client"/>

interface ImportMetaEnv {
    readonly VITE_API_ENDPOINT_GENERAL: string
    readonly VITE_API_ENDPOINT_EVENTS: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
