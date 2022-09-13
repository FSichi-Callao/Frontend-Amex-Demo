export const sidebarDropRoutes = [
    {
        path: '/', // the url
        icon: 'fa-solid fa-table-columns', // the component being exported from icons/index.js
        name: 'Dashboard', // name that appear in Sidebar
    },
    {
        path: '/accounts', // the url
        icon: 'fa-solid fa-chart-simple', // the component being exported from icons/index.js
        name: 'Accounts', // name that appear in Sidebar
    },
    {
        icon: 'fa-solid fa-credit-card', // the component being exported from icons/index.js
        name: 'Card', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/cards', // the url
                name: 'List', // name that appear in Sidebar
            },
            {
                path: '/personalization-file', // the url
                name: 'Perso Files', // name that appear in Sidebar
            },
            {
                path: '/card-numbers', // the url
                name: 'Card Numbers', // name that appear in Sidebar
            }
        ]
    },
    {
        icon: 'fa-solid fa-dollar-sign', // the component being exported from icons/index.js
        name: 'Ext. Payment', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/epm-address', // the url
                name: 'Addresses', // name that appear in Sidebar
            },
            {
                path: '/epm-mandate', // the url
                name: 'Mandates', // name that appear in Sidebar
            },
            {
                path: '/epm-transaction', // the url
                name: 'Transactions', // name that appear in Sidebar
            },
            {
                path: '/epm-direct-debit-tx', // the url
                name: 'Direct Debit Transactions', // name that appear in Sidebar
            },
            {
                path: '/epm-manual-approval-transaction', // the url
                name: 'Manual approval transactions', // name that appear in Sidebar
            },
            {
                path: '/log-epm-manual-approval', // the url
                name: 'Manual approval log', // name that appear in Sidebar
            },
        ]
    },
    {
        path: '/holder', // the url
        icon: 'fa-solid fa-address-card', // the component being exported from icons/index.js
        name: 'Holders', // name that appear in Sidebar
    },
    {
        icon: 'fa-solid fa-rocket', // the component being exported from icons/index.js
        name: 'Simulations', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/simulation-authorize', // the url
                name: 'Authorization', // name that appear in Sidebar
            }
        ]
    },
    {
        icon: 'fa-solid fa-clapperboard', // the component being exported from icons/index.js
        name: 'Special Account', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/special_account_transaction', // the url
                name: 'List', // name that appear in Sidebar
            },
            {
                path: '/special_account', // the url
                name: 'Transactions', // name that appear in Sidebar
            },
        ]
    },
    {
        icon: 'fa-solid fa-arrow-trend-up', // the component being exported from icons/index.js
        name: 'Transaction', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/authorize', // the url
                name: 'Authorizations', // name that appear in Sidebar
            },
            {
                path: '/actual-authorizes', // the url
                name: 'Actual authorizations', // name that appear in Sidebar
            },
            {
                path: '/declined-authorizes', // the url
                name: 'Declined authorizations', // name that appear in Sidebar
            },
            {
                path: '/transaction', // the url
                name: 'Settlements', // name that appear in Sidebar
            },
            {
                path: '/dispute', // the url
                name: 'Disputes', // name that appear in Sidebar
            },
        ]
    },
    {
        icon: 'fa-solid fa-tower-broadcast', // the component being exported from icons/index.js
        name: 'TAI', // name that appear in Sidebar, 
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/tai-notification', // the url
                name: 'TAI notifications', // name that appear in Sidebar
            }
        ]
    },

    /* FALTA MENU DE ADMINISTRACION */

    {
        icon: 'bx bx-chat', // the component being exported from icons/index.js
        name: 'Administration', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/personalization-file-delivery-config', // the url
                name: 'Perso files delivery configs', // name that appear in Sidebar
            },
            {
                path: '/balance-adjustment', // the url
                name: 'Balance adjustments', // name that appear in Sidebar
            },
            {
                path: '/balance-adjustment-config', // the url
                name: 'Balance adjustment configurations', // name that appear in Sidebar
            },
            {
                path: '/card-design', // the url
                name: 'Card designs', // name that appear in Sidebar
            },
            {
                path: '/fee-group', // the url
                name: 'Fees groups', // name that appear in Sidebar
            },
            {
                path: '/additional-charsets', // the url
                name: 'Additional charsets', // name that appear in Sidebar
            },
            {
                name: 'Frauds', // name that appear in Sidebar
                dropdown: true,
                open: false,
                menu: [
                    {
                        path: '/risk-merchant-config', // the url
                        name: 'Risk Merchant Configuration', // name that appear in Sidebar
                    }
                ]
            },
            {
                name: 'Limit', // name that appear in Sidebar
                dropdown: true,
                open: false,
                menu: [
                    {
                        path: '/limit', // the url
                        name: 'List', // name that appear in Sidebar
                    },
                    {
                        path: '/limit-group', // the url
                        name: 'Groups', // name that appear in Sidebar
                    },
                ]
            },
            {
                name: 'Risk rule', // name that appear in Sidebar
                dropdown: true,
                open: false,
                menu: [
                    {
                        path: '/risk-rule', // the url
                        name: 'List', // name that appear in Sidebar
                    },
                    {
                        path: '/risk-rules-group', // the url
                        name: 'Groups', // name that appear in Sidebar
                    },
                ]
            },
            {
                path: '/pad', // the url
                name: 'Paddings', // name that appear in Sidebar
            },
            {
                path: '/program', // the url
                name: 'Programs', // name that appear in Sidebar
            },
            {
                name: 'TAI', // name that appear in Sidebar
                dropdown: true,
                open: false,
                menu: [
                    {
                        path: '/tai-endpoint', // the url
                        name: 'Endpoints', // name that appear in Sidebar
                    }
                ]
            },
            {
                name: 'Tokenization', // name that appear in Sidebar
                dropdown: true,
                open: false,
                menu: [
                    {
                        path: '/tokenization-config', // the url
                        name: 'Configs', // name that appear in Sidebar
                    },
                    {
                        path: '/tokenization-verification-method', // the url
                        name: 'Verification methods', // name that appear in Sidebar
                    },
                    {
                        path: '/tokenization-card-metadata', // the url
                        name: 'Card Metadata', // name that appear in Sidebar
                    },
                ]
            },
            {
                path: '/usage-group', // the url
                name: 'Usage groups', // name that appear in Sidebar
            },
            {
                name: 'Classificators', // name that appear in Sidebar
                dropdown: true,
                open: false,
                menu: [
                    {
                        path: '/region', // the url
                        name: 'Regions', // name that appear in Sidebar
                    }
                ]
            },
            {
                path: '/mcc-groups', // the url
                name: 'MCC groups', // name that appear in Sidebar
            },
            {
                name: 'Permissions', // name that appear in Sidebar
                dropdown: true,
                open: false,
                menu: [
                    {
                        path: '/role', // the url
                        name: 'Roles', // name that appear in Sidebar
                    }
                ]
            },
        ]
    },

    /* ---- FIN ADMINISTRATION ---- */

    {
        icon: 'fa-solid fa-floppy-disk', // the component being exported from icons/index.js
        name: 'Downloads', // name that appear in Sidebar, 
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/export-to-file', // the url
                name: 'Export to files', // name that appear in Sidebar
            }
        ]
    },
]