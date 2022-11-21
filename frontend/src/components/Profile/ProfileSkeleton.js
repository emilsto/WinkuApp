//skeleton loader for profileCard

const ProfileSkeleton = () => {
    return (
        <div className="flex flex-col items-center m-5">
        <div className="animate-pulse flex flex-row">
            <div className="flex flex-row items-center m-5">
            <div className="w-24 h-24 rounded-full bg-slate-400"></div>    
            <div className="flex flex-col mx-1">
                <div className="w-52 h-4 bg-slate-400 rounded"></div>
                <div className="w-32 h-4 bg-slate-400 rounded mt-2"></div>
            </div>
        </div>
        </div>
        </div>
    );
    }


export default ProfileSkeleton