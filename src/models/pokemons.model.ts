// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from 'sequelize';
import { Application } from '../declarations';
import { HookReturn } from 'sequelize/types/lib/hooks';

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const pokemons = sequelizeClient.define('Pokemons', {

    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pokedex_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    generation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    evolution : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    family_id : {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type_1 : {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    type_2 : {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    weather_1 : {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    weather_2 : {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    stat_total : {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    atk : {
      type: DataTypes.STRING,
      allowNull: true
    },
    def : {
      type: DataTypes.STRING,
      allowNull: true
    },
    sta : {
      type: DataTypes.STRING,
      allowNull: true
    },
    legendary : {
      type: DataTypes.STRING,
      allowNull: true
    },
    cp1 : {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cp2 : {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status : {
      type: DataTypes.ENUM('active', 'deleted'),
      allowNull: true,
      defaultValue: 'active'
    }


  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (pokemons as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return pokemons;
}
