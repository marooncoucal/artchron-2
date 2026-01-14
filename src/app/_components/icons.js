export function ArrowBack({ w, h }) {
    return (
        <div>
            <svg width={w ?? "48"} height={h ?? "48"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="23.6971" fill="#F7F7F7" />
                <path d="M21.5713 31.0705C21.1809 31.461 20.5478 31.4608 20.1572 31.0705L13.793 24.7063C13.4024 24.3158 13.4024 23.6827 13.793 23.2922L20.1572 16.928C20.5478 16.5377 21.1809 16.5375 21.5713 16.928C21.9617 17.3184 21.9615 17.9515 21.5713 18.342L16.9141 22.9992L34.5 22.9992L34.5 24.9992L16.9141 24.9992L21.5713 29.6565C21.9615 30.047 21.9617 30.6801 21.5713 31.0705Z" fill="#C9C8C8" />
            </svg>
        </div>
    )
}

export function ArrowTestLeft({ w, h, color, className }) {
    return (
        <div className={className}>
            <svg width={w ?? "50"} height={h ?? "15"} viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={color ?? "black"} d="M49 8.36328C49.5523 8.36328 50 7.91557 50 7.36328C50 6.811 49.5523 6.36328 49 6.36328L49 7.36328L49 8.36328ZM0.292893 6.65617C-0.097631 7.04669 -0.0976311 7.67986 0.292893 8.07038L6.65685 14.4343C7.04738 14.8249 7.68054 14.8249 8.07107 14.4343C8.46159 14.0438 8.46159 13.4107 8.07107 13.0201L2.41421 7.36328L8.07107 1.70642C8.46159 1.3159 8.46159 0.682733 8.07107 0.292209C7.68054 -0.0983153 7.04738 -0.0983154 6.65686 0.292209L0.292893 6.65617ZM49 7.36328L49 6.36328L1 6.36328L1 7.36328L1 8.36328L49 8.36328L49 7.36328Z" />
            </svg>
        </div>
    )
}

export function ArrowTestRight({ w, h, color, className }) {
    return (
        <div className={className}>
            <svg width={w ?? "50"} height={h ?? "15"} viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={color ?? "black"} d="M1 8.36328C0.447715 8.36328 5.96364e-08 7.91557 0 7.36328C-5.96364e-08 6.811 0.447715 6.36328 1 6.36328L1 7.36328L1 8.36328ZM49.7071 6.65617C50.0976 7.04669 50.0976 7.67986 49.7071 8.07038L43.3431 14.4343C42.9526 14.8249 42.3195 14.8249 41.9289 14.4343C41.5384 14.0438 41.5384 13.4107 41.9289 13.0201L47.5858 7.36328L41.9289 1.70642C41.5384 1.3159 41.5384 0.682733 41.9289 0.292209C42.3195 -0.0983153 42.9526 -0.0983154 43.3431 0.292209L49.7071 6.65617ZM1 7.36328L1 6.36328L49 6.36328L49 7.36328L49 8.36328L1 8.36328L1 7.36328Z" />
            </svg>
        </div>
    )
}

export function ExitButton({ w, h }) {
    return (
        <div>
            <svg width={w ?? "48"} height={h ?? "48"} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="23.6971" fill="#F7F7F7" />
                <path d="M31.2929 15.5156C31.6834 15.1251 32.3164 15.1251 32.7069 15.5156C33.0974 15.9061 33.0973 16.5391 32.7069 16.9296L25.414 24.2227L32.2636 31.0724L32.3319 31.1476C32.6521 31.5403 32.6296 32.1204 32.2636 32.4865C31.8975 32.8525 31.3174 32.875 30.9247 32.5548L30.8495 32.4865L23.9999 25.6368L17.1503 32.4865L17.0741 32.5558C16.6814 32.8755 16.1021 32.8523 15.7362 32.4865C15.3702 32.1204 15.3467 31.5403 15.6669 31.1476L15.7362 31.0724L22.5858 24.2227L15.2929 16.9296C14.9024 16.5391 14.9024 15.9061 15.2929 15.5156C15.6834 15.125 16.3164 15.125 16.7069 15.5156L23.9999 22.8086L31.2929 15.5156Z" fill="#C9C8C8" />
            </svg>
        </div>
    )
}

function WordBackButton() {
    return (
        <div
            className='cursor-pointer bg-white border py-1 px-3 flex justify-center items-center max-w-20'
        >
            назад
        </div>
    )
}

export function IconLogin({ w, h, color, className }) {
    return (
        <div className={className}>
            <svg width={w ?? "30"} height={h ?? "30"} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="21" r="9" fill={color ?? "#000"} />
                <circle cx="15" cy="6" r="6" fill={color ?? "#000"} />
            </svg>
        </div>
    )
}

export function IconMain({ w, h, color, className }) {
    return (
        <div className={className}>
            <svg width={w ?? "28"} height={h ?? "28"} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.14633" cy="21.8534" r="6.14633" fill={color ?? "#000"} />
                <circle cx="6.14633" cy="6.14633" r="6.14633" fill={color ?? "#000"} />
                <circle cx="21.8534" cy="21.8534" r="6.14633" fill={color ?? "#000"} />
                <circle cx="21.8534" cy="6.14633" r="6.14633" fill={color ?? "#000"} />
            </svg>
        </div>
    )
}

export function IconWhat({ w, h, color, className }) {
    return (
        <div className={className}>
            <svg width={w ?? "28"} height={h ?? "28"} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill={color ?? "#000"} />
                <circle cx="18.5" cy="10.5" r="5.5" fill="white" />
            </svg>
        </div>
    )
}