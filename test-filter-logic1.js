
const weapons = [
    { name: "Sword 1", propertyType: "sharp,round", weaponCode: "sword001", caliberCode: "caliber001" },
    { name: "Sword 2", propertyType: "sharp", weaponCode: "sword001", caliberCode: "caliber001" },
    { name: "Sword 3", propertyType: "sharp,round", weaponCode: "sword002", caliberCode: "caliber001" },
    { name: "Sword 4", propertyType: "sharp", weaponCode: "sword002", caliberCode: "caliber001" },
    { name: "Sword 5", propertyType: "sharp,round", weaponCode: "sword001", caliberCode: "caliber002" },
];

function filterWeapons(weapons, criteria) {
    return weapons.filter(weapon => {
        const types = weapon.propertyType.split(",");
        const matchesPropertyType = types.includes(criteria.propertyType);
        const matchesWeaponCode = !criteria.weaponCode || weapon.weaponCode === criteria.weaponCode;
        const matchesCaliberCode = !criteria.caliberCode || weapon.caliberCode === criteria.caliberCode;

        return matchesPropertyType && matchesWeaponCode && matchesCaliberCode;
    });
}

let criteria = { propertyType: "sharp" };
const weaponsFilter1 = weapons.filter(weapon => {
    const types = weapon.propertyType.split(",");
    if(types.length>1){
        const ptype = types.filter(t => t === criteria.propertyType);
        if(ptype){
            return true;
        }
    } else {
        return weapon.propertyType === criteria.propertyType;
    }
    return false;
    
});
console.log("criteria: ", criteria);
console.log("Filter by propertyType weaponsFilter1: ", weaponsFilter1);
console.log("Filter by propertyType:", filterWeapons(weapons, criteria));


criteria = { propertyType: "round" };
const weaponsFilter2 = weapons.filter(weapon => {
    const types = weapon.propertyType.split(",");
    if(types.length>1){
        const ptype = types.filter(t => t === criteria.propertyType);
        if(ptype){
            return true;
        }
    } else {
        return weapon.propertyType === criteria.propertyType;
    }
    return false;
    
});
console.log("criteria: ", criteria);
console.log("Filter by propertyType weaponsFilter2: ", weaponsFilter2);
console.log("Filter by propertyType:", filterWeapons(weapons, criteria));

criteria = { propertyType: "sharp", weaponCode: "sword001" };
const weaponsFilter3 = weapons.filter(weapon => {
    const types = weapon.propertyType.split(",");
    if(types.length>1){
        const ptype = types.filter(t => t === criteria.propertyType);
        if(ptype){
            if(weapon.weaponCode === criteria.weaponCode){
                return true;
            }
        }
    } else {
        return weapon.propertyType === criteria.propertyType && weapon.weaponCode === criteria.weaponCode;
    }
    return false;
    
});
console.log("criteria: ", criteria);
console.log("Filter by propertyType and weaponCode weaponsFilter3: ", weaponsFilter3);
console.log("Filter by propertyType and weaponCode:", filterWeapons(weapons, criteria));

criteria = { propertyType: "round", weaponCode: "sword001" };
const weaponsFilter4 = weapons.filter(weapon => {
    const types = weapon.propertyType.split(",");
    if(types.length>1){
        const ptype = types.filter(t => t === criteria.propertyType);
        if(ptype){
            if(weapon.weaponCode === criteria.weaponCode){
                return true;
            }
        }
    } else {
        return weapon.propertyType === criteria.propertyType && weapon.weaponCode === criteria.weaponCode;
    }
    return false;
    
    
});
console.log("criteria: ", criteria);
console.log("Filter by propertyType and weaponCode weaponsFilter4: ", weaponsFilter4);
console.log("Filter by propertyType and weaponCode:", filterWeapons(weapons, criteria));

criteria = { propertyType: "sharp", weaponCode: "sword001", caliberCode: "caliber001" };
const weaponsFilter5 = weapons.filter(weapon => {
    const types = weapon.propertyType.split(",");
    if(types.length>1){
        const ptype = types.filter(t => t === criteria.propertyType);
        if(ptype){
            if(weapon.weaponCode === criteria.weaponCode && weapon.caliberCode === criteria.caliberCode){
                return true;
            }
        }
    } else {
        return weapon.propertyType === criteria.propertyType && weapon.weaponCode === criteria.weaponCode && weapon.caliberCode === criteria.caliberCode;
    }
    return false;
    
});
console.log("criteria: ", criteria);
console.log("Filter by propertyType, weaponCode, and caliberCode weaponsFilter5: ", weaponsFilter5);
console.log("Filter by propertyType, weaponCode, and caliberCode:", filterWeapons(weapons, criteria));


criteria = { propertyType: "sharp", weaponCode: "sword001", caliberCode: "caliber002" };
const weaponsFilter6 = weapons.filter(weapon => {
    const types = weapon.propertyType.split(",");
    if(types.length>1){
        const ptype = types.filter(t => t === criteria.propertyType);
        if(ptype){
            if(weapon.weaponCode === criteria.weaponCode && weapon.caliberCode === criteria.caliberCode){
                return true;
            }
        }
    } else {
        return weapon.propertyType === criteria.propertyType && weapon.weaponCode === criteria.weaponCode && weapon.caliberCode === criteria.caliberCode;
    }
    return false;
    
});
console.log("criteria: ", criteria);
console.log("Filter by propertyType, weaponCode, and caliberCode weaponsFilter6: ", weaponsFilter6);
console.log("Filter by propertyType, weaponCode, and caliberCode:", filterWeapons(weapons, criteria));
