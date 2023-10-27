import { SyncLoader } from "react-spinners";
import loadingImage from "../../assets/loading.png";

const Loading = () => {
    return (
        <div className="flex flex-col items-center gap-y-5">
            <img className="w-[56px]" src={loadingImage} alt="Loading ..." />
            <SyncLoader color="#8A050C" size={16} speedMultiplier={0.8} />
        </div>
    );
};

export default Loading;
