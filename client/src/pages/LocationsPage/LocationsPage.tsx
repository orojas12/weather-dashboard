import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LocationContext } from "hooks/useLocation";
import { AddIcon } from "icons/ui";
import "./locations.css";
import { Card, ToastContext } from "components";
import Location from "./Location";

export default function LocationsPage() {
  const location = useContext(LocationContext);
  const toast = useContext(ToastContext);

  useEffect(() => {
    const status = location?.data.status;
    if (status?.error) {
      toast?.setToast({
        type: "alert",
        msg: status.msg as string,
      });
      location?.clearStatus();
    } else if (status?.msg) {
      toast?.setToast({
        type: "success",
        msg: status.msg,
      });
      location?.clearStatus();
    }
  }, [location?.data.status]);

  return (
    <article className="locations">
      <header>
        <h1>Manage Locations</h1>
        <NavLink to="add">
          <button className="btn btn--sm">
            <AddIcon className="locations__add" />
          </button>
        </NavLink>
      </header>
      <main>
        <div className="locations__favorite">
          <h2>Favorite Location</h2>
          {location?.data.favoriteLocation ? (
            <Location
              location={location.data.favoriteLocation}
              options={[
                {
                  content: "Remove favorite",
                  action: location.removeFavorite,
                },
                {
                  content: "Delete",
                  action: () =>
                    location.deleteLocation(location.data.favoriteLocation!),
                },
              ]}
              active={
                location.data.activeLocation.placeId ===
                location.data.favoriteLocation.placeId
              }
            />
          ) : (
            <Card>
              <Card.Content>No favorite set</Card.Content>
            </Card>
          )}
        </div>
        <div className="locations__other">
          <h2>Other Locations</h2>
          {location?.data.savedLocations
            .filter(
              (value) =>
                value.placeId !== location?.data.favoriteLocation?.placeId
            )
            .map((value) => (
              <Location
                key={value.placeId}
                location={value}
                options={[
                  {
                    content: "Set as favorite",
                    action: () => location.setFavorite(value),
                  },
                  {
                    content: "Delete",
                    action: () => location.deleteLocation(value),
                  },
                ]}
                active={location.data.activeLocation.placeId === value.placeId}
              />
            ))}
        </div>
      </main>
    </article>
  );
}
