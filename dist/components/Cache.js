"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Temp = {};
const Timeouts = {};
function SetCache(KeyID, Value, Expiration) {
    Temp[KeyID] = Value;
    clearTimeout(Timeouts[KeyID]);
    delete Timeouts[KeyID];
    Timeouts[KeyID] = setTimeout(() => {
        delete Temp[KeyID];
        delete Timeouts[KeyID];
        global?.gc();
    }, Expiration);
}
function Get(KeyID) {
    if (Object.prototype.hasOwnProperty.call(Temp, KeyID))
        return Temp[KeyID];
    return undefined;
}
exports.default = {
    Get,
    Set: SetCache,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9DYWNoZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQztBQUN2QixNQUFNLFFBQVEsR0FBVSxFQUFFLENBQUM7QUFJM0IsU0FBUyxRQUFRLENBQUMsS0FBYSxFQUFFLEtBQVUsRUFBRSxVQUFrQjtJQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBRXBCLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5QixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUV2QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDZixDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakIsQ0FBQztBQUdELFNBQVMsR0FBRyxDQUFDLEtBQWE7SUFDeEIsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFFRCxrQkFBZTtJQUNiLEdBQUc7SUFDSCxHQUFHLEVBQUUsUUFBUTtDQUNkLENBQUMifQ==