interface Project {
    title: string
    description: string
    imgSrc: string
    href: string
}

const projectsData: Project[] = [
    {
        title: 'قارئ تذاكر ألبوران',
        description: `تطبيق اندرويد لقراءة التذاكر التي تقدم لمستعملي خدمات جرار تعاونية البوران للصيد البحري التقليدي بوادي لو`,
        imgSrc: '/static/images/qr-code-generator.png',
        href: 'https://tickets-albourane.omniversify.com',
    },
]

export default projectsData
