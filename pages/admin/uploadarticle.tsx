import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('Components/pages/admin/UploadArticle'), {ssr: false}); // Disable ssr on HomeComponent

export default () => <DynamicComponent/>