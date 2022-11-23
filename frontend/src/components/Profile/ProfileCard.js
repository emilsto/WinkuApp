//profile card contains the user's profile information image, bio, and username

import React from "react";
import icon_admin from "../../assets/admin-icon.svg";

const ProfileCard = ({ user }) => {
    const [isAdmin, setIsAdmin] = React.useState(false);
    
    const adminCheck = () => {
        if (user.isAdmin) {
        setIsAdmin(true);
        }
    };
    
    React.useEffect(() => {
        adminCheck();
    });

    //if user object is empty, return null
    if (Object.keys(user).length === 0) {
        return null;
    }
    
    return (
        <div className="flex flex-col items-center m-5">
            <div className="flex flex-row">
            <img className="rounded-full w-24 h-24" src={user.image} alt=""></img>
            <div className="flex flex-col m-5">
                <div className="flex flex-row">
                <p>@{user.username}</p>
            {isAdmin ? (
                <img
                    className="w-4 h-4 m-1"
                    src={icon_admin}
                    alt="purple checkmark"
                ></img>
            ) : null}
            </div>
                        <p className="text-gray-400">{user.bio}</p>

            </div>
        </div>
        </div>
    );
};

export default ProfileCard;