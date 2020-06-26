import { NextPageContext } from "next";
import ManageImages from "Components/pages/admin/ManageImages";
import fetchServerApi from "Scripts/fetchServerApi";

const ManageImagesPage = ({images}) => <ManageImages images={images}/>

export async function getServerSideProps({req, res}:NextPageContext) {
    let images = await fetchServerApi('getImageList').then(res => res.json()).then(res => res.data);
    return {
        props: {
            images
        }
    }
}

export default ManageImagesPage;