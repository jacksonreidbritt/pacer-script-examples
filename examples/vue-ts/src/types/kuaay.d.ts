declare global {
    interface Window {
        $kuaayApp: {
            config: { [key: string]: any },
            createModal: (value: any) => void,
            showModal: (value: any) => void,
            hideModal: () => void,
            setConfig: (value: any) => void,
        }
    }
}

export {}
