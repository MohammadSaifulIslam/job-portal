import { Circles } from "react-loader-spinner";

const LoadingSpinner = () => {
    return (
        <div className="h-[calc(100vh-96px)] w-full flex justify-center items-center z-50">
            <Circles
                height="80"
                width="80"
                color="#ef4444"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default LoadingSpinner;