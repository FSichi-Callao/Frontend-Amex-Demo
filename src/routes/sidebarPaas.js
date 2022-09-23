export const sidebarPaasRoutes = [
    {
        path: '/dashboard', // the url
        icon: 'fa-solid fa-house', // the component being exported from icons/index.js
        name: 'Inicio', // name that appear in Sidebar
    },
    {
        icon: 'fa-solid fa-laptop', // the component being exported from icons/index.js
        name: 'Admin de Organismo', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/list-legajo', // the url
                name: 'Listado de Usuarios', // name that appear in Sidebar
            },
            {
                path: '/list-transaction', // the url
                name: 'Listado de Operaciones', // name that appear in Sidebar
            }
        ]
    },
    {
        icon: 'fa-solid fa-landmark', // the component being exported from icons/index.js
        name: 'Admin de Cuentas', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/list-accounts-business', // the url
                name: 'Cuenta del Organismo', // name that appear in Sidebar
            },
            {
                path: '/list-accounts-person', // the url
                name: 'Balance de cuentas virtuales', // name that appear in Sidebar
            }
        ]
    },
    {
        icon: 'fa-solid fa-chart-gantt', // the component being exported from icons/index.js
        name: 'Reportes', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/report-daily-new-accounts', // the url
                name: 'Nuevas Cuentas (diario)', // name that appear in Sidebar
            }
        ]
    },
    {
        icon: 'fa-solid fa-chart-line', // the component being exported from icons/index.js
        name: 'Estadisticas', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/chart-type-operations', // the url
                name: 'Tipo de Operaciones', // name that appear in Sidebar
            },
            {
                path: '/chart-total-by-day', // the url
                name: 'Totales por dia', // name that appear in Sidebar
            },
        ]
    },
    {
        icon: 'fa-solid fa-people-group', // the component being exported from icons/index.js
        name: 'Admin Usuarios Consola', // name that appear in Sidebar,
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/admin-profiles', // the url
                name: 'Gestion de Perfiles', // name that appear in Sidebar
            },
            {
                path: '/admin-users', // the url
                name: 'Gestion de Usuarios', // name that appear in Sidebar
            }
        ]
    },
    {
        icon: 'fa-solid fa-gear', // the component being exported from icons/index.js
        name: 'Configuracion del Sistema', // name that appear in Sidebar, 
        dropdown: true,
        open: false,
        submenu: [
            {
                path: '/list-transaction-alarm', // the url
                name: 'Alarmas', // name that appear in Sidebar
            },
            {
                path: '/currencies', // the url
                name: 'Monedas', // name that appear in Sidebar
            },
            {
                path: '/rules', // the url
                name: 'Operaciones', // name that appear in Sidebar
            },
            {
                path: '/type-accounts', // the url
                name: 'Listado de tipo de cuentas', // name that appear in Sidebar
            },
        ]
    }
]