import React, { useContext, useState, useEffect, useRef } from "react";
import Realm from "realm";
import { Profile } from "../profileSchema";
import { useAuth } from "./AuthProvider";

const PlayerContext = React.createContext(null);

const PlayerProvider = ({ children, projectPartition }) => {
  const [profiles, setProfiles] = useState([]);
  const { user } = useAuth();
  const realmRef = useRef(null);

  useEffect(() => {
    const config = {
      sync: {
        user: user,
        partitionValue: projectPartition,
      },
    };
    Realm.open(config).then((projectRealm) => {
      //orders data by username
      realmRef.current = projectRealm;
      const SyncProfiles = projectRealm.objects("Profile");
      let sortedProfiles = syncProfiles.stored("Username");
      setProfiles([...sortedProfiles]);
      sortedProfiles.addListener(() => {
        setProfiles([...sortedProfiles]);
      });
    });
    return () => {
      // cleanup function
      const projectRealm = realmRef.current;
      if (projectRealm) {
        projectRealm.close();
        realmRef.current = null;
        setProfiles([]);
      }
    };
  }, [user, projectPartition]);

  const createProfile = (steamID, rank, role) => {
    //create function using default username "Player"
    const projectRealm = realmRef.current;
    projectRealm.write(() => {
      projectRealm.create(
        "Profile",
        new Profile({
          name: "Player" || steamID,
          partition: projectPartition,
          rank: "Unranked" || rank,
          role: "None" || role
        })
      );
    });
  };

  const setProfileStatus = (player, status) => {
    // Making sure a valid player status was passed
    if (
      ![
        player.STATUS_IN_GAME,
        player.STATUS_IN_QUEUE,
        player.STATUS_OFFLINE,
      ].includes(status)
    ) {
      throw new Error(`Invalid status: ${status}`);
    }
    const projectRealm = realmRef.current;

    projectRealm.write(() => {
      player.status = status;
    });
  };

  const deleteProfile = (profile) => {
    //Delete function
    const projectRealm = realmRef.current;
    projectRealm.write(() =>{
      projectRealm.delete(profile);
      setProfiles([...projectRealm.objects("Players").sorted("Username")]);
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        createProfile,
        deleteProfile,
        setProfileStatus,
        profiles,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};


const useProfiles = () => {
  const profiles = useContext(PlayerContext);
  if (task == null) {
    throw new Error("useProfiles() called outside of a PlayerProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return profiles;
};

export { PlayerProvider, useProfiles };
