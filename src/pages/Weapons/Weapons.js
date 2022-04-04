import CardList from "../../components/CardList/CardList";
import Wrapper from "../../components/Wrapper/Wrapper";
import { useWeaponCtx } from "../../store/weapon-context";

export default function Weapons(props) {
  const { weapons } = useWeaponCtx();

  return (
    <>
      <Wrapper>
        <div className="container pt-5">
          <div className="row">
            {weapons.map((weapon) => {
              return (
                <div key={weapon.displayName} className="col-md-4 mb-3">
                  <div className="card h-100">
                    <img
                      src={weapon.displayIcon}
                      alt={weapon.displayName}
                      className="card-img-top img-fluid w-100"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{weapon.displayName}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                      <CardList
                        ListItemName={"Fire Rate"}
                        ListItemKey={weapon?.weaponStats?.fireRate}
                      />
                      <CardList
                        ListItemName={"Magazine Size"}
                        ListItemKey={weapon?.weaponStats?.magazineSize}
                      />
                      <CardList
                        ListItemName={"Run Speed Multiplier"}
                        ListItemKey={weapon?.weaponStats?.runSpeedMultiplier}
                      />
                      <CardList
                        ListItemName={"Reload Time in Seconds"}
                        ListItemKey={weapon?.weaponStats?.reloadTimeSeconds}
                      />
                      <CardList
                        ListItemName={"First Bullet Accuracy"}
                        ListItemKey={weapon?.weaponStats?.firstBulletAccuracy}
                      />
                      <CardList
                        ListItemName={"Zoom Multiplier"}
                        ListItemKey={weapon?.weaponStats?.zoomMultiplier}
                      />
                    </ul>
                    <div className="card-body">
                      <h5>{`Price: ${
                        weapon?.shopData?.cost === undefined
                          ? "free"
                          : weapon?.shopData?.cost
                      }`}</h5>
                      <button className="btn btn-dark">
                        Checkout the skins
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
      ;
    </>
  );
}
