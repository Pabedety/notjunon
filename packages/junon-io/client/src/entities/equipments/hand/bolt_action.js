const RangeEquipment = require("./range_equipment")
const Constants = require("./../../../../../common/constants.json")
const Protocol = require("./../../../../../common/util/protocol")

class BoltAction extends RangeEquipment {

  repositionSprite() {
    super.repositionSprite()

    this.sprite.position.x = 20
  }

  getSpritePath() {
    return 'bolt_action.png'
  }

  getType() {
    return Protocol.definition().BuildingType.BoltAction
  }

  getConstantsTable() {
    return "Equipments.BoltAction"
  }

}

module.exports = BoltAction
