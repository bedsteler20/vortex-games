"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSuppressModLimitPatch = exports.setPriorityType = void 0;
const redux_act_1 = require("redux-act");
exports.setPriorityType = redux_act_1.createAction('TW3_SET_PRIORITY_TYPE', type => type);
exports.setSuppressModLimitPatch = redux_act_1.createAction('TW3_SET_SUPPRESS_LIMIT_PATCH', suppress => suppress);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXlDO0FBRTVCLFFBQUEsZUFBZSxHQUFHLHdCQUFZLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV0RSxRQUFBLHdCQUF3QixHQUNuQyx3QkFBWSxDQUFDLDhCQUE4QixFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFByaW9yaXR5VHlwZSA9IGNyZWF0ZUFjdGlvbignVFczX1NFVF9QUklPUklUWV9UWVBFJywgdHlwZSA9PiB0eXBlKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTdXBwcmVzc01vZExpbWl0UGF0Y2ggPVxyXG4gIGNyZWF0ZUFjdGlvbignVFczX1NFVF9TVVBQUkVTU19MSU1JVF9QQVRDSCcsIHN1cHByZXNzID0+IHN1cHByZXNzKTtcclxuIl19