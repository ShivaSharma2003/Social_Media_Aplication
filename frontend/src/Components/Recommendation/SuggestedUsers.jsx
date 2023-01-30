import React from "react";
import { useEffect } from "react";
import { SuggestedProfileAction } from "../../Redux/Actions/AnotherUserProfileActions";
import { useDispatch, useSelector } from "react-redux";
import {
  FollowUserAction,
  UnfollowUserAction,
} from "../../Redux/Actions/ProfileAction";

const SuggestedUsers = () => {
  const dispatch = useDispatch();

  const { loading, SuggestedProfile, error } = useSelector(
    (state) => state.SuggestedProfile
  );

  const { profile } = useSelector((state) => state.Profile);
  useEffect(() => {
    dispatch(SuggestedProfileAction());
  }, [dispatch]);

  useEffect(() => {
    if (loading) {
      document.title = "Loading...";
    }
  });

  const FollowButtonHandler = (id) => {
    dispatch(FollowUserAction(id));
  };

  const UnFollowButtonHandler = (id) => {
    dispatch(UnfollowUserAction(id));
  };

  return (
    <div className="bg-white hidden tablet:flex h-[100%] w-[100%] border-2 border-gray-300 flex-col gap-2 overflow-scroll scrollbar-hide ">
      <div className="border-b-2 p-2 w-full">
        <h3 className="font-bold text-sm flex-wrap">People You may Know </h3>
      </div>
      <div className="flex flex-col gap-2 h-full w-full overflow-scroll scrollbar-hide ">
        {SuggestedProfile?.map((item, key) => {
          return (
            <>
              {profile?._id === item._id ? (
                <></>
              ) : (
                <>
                  <div className="border-b-2 shadow-sm flex flex-row w-full gap-2 px-2 ">
                    <div className="flex-1 flex flex-row justify-start items-center gap-2 py-1 cursor-pointer">
                      <div>
                        <img
                          src={item.Avatar}
                          alt=""
                          className="object-fill h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="flex-col flex ">
                        <h2 className="text-sm font-bold text-gray-800 truncate">
                          @{item.userName}
                        </h2>
                        <h5 className="text-xs font-semibold text-gray-600 ">
                          {item.FullName}
                        </h5>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center items-center ">
                      {profile?.Followings.includes(item._id) ? (
                        <button
                          className="font-bold text-gray-400 text-sm  "
                          onClick={() => UnFollowButtonHandler(item._id)}
                        >
                          Unfollow
                        </button>
                      ) : (
                        <button
                          className="font-bold text-blue-500 text-sm  "
                          onClick={() => FollowButtonHandler(item._id)}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestedUsers;
