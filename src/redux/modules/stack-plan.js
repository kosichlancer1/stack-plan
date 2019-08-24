import fakeData from '../../data/fakeData'
import { put, takeEvery } from 'redux-saga/effects'
import { createSelector } from 'reselect'
import { toast } from 'react-toastify'

// Action types

const REQUESTED_STACK_PLAN = 'REQUESTED_STACK_PLAN'
const REQUESTED_STACK_PLAN_SUCCEEDED = 'REQUESTED_STACK_PLAN_SUCCEEDED'
const REQUESTED_STACK_PLAN_FAILED = 'REQUESTED_STACK_PLAN_FAILED'

const UPDATE_SPACE_FAILURE = 'UPDATE_SPACE_FAILURE'
const UPDATE_SPACE_SUCCEEDED = 'UPDATE_SPACE_SUCCEEDED'
const UPDATE_SPACE_REQUEST = 'UPDATE_SPACE_REQUEST'

const CHOOSE_SPACE = 'CHOOSE_SPACE'

// Action creators

export const requestStackPlan = () => ({
  type: REQUESTED_STACK_PLAN
})

export const requestStackPlanSuccess = payload => ({
  type: REQUESTED_STACK_PLAN_SUCCEEDED,
  payload
})

export const requestStackPlanFailure = error => ({
  type: REQUESTED_STACK_PLAN_FAILED,
  error
})

export const updateSpaceRequest = payload => ({
  type: UPDATE_SPACE_REQUEST,
  payload
})

export const updateSpaceSuccess = payload => ({
  type: UPDATE_SPACE_SUCCEEDED,
  payload
})

export const updateSpaceFailure = error => ({
  type: UPDATE_SPACE_FAILURE,
  error
})

export const chooseSpaceById = payload => ({
  type: CHOOSE_SPACE,
  payload
})

// Reducer

const initialState = {
  stackPlan: [],
  currentSpaceId: null,
  currentFloorId: null,
  loading: true,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_STACK_PLAN:
      return { ...state, loading: true, error: false }
    case REQUESTED_STACK_PLAN_SUCCEEDED:
      return { stackPlan: action.payload, loading: false, error: false }
    case REQUESTED_STACK_PLAN_FAILED:
      return { ...state, loading: false, error: true }
    case CHOOSE_SPACE:
      return {
        ...state,
        currentSpaceId: action.payload.spaceId,
        currentFloorId: action.payload.floorId
      }
    case UPDATE_SPACE_SUCCEEDED:
      return {
        ...state,
        spaceLoading: false,
        stackPlan: state.stackPlan.map(floor => {
          if (floor.uuid === state.currentFloorId) {
            return {
              ...floor,
              spaces: floor.spaces.map(space => {
                if (space.uuid === state.currentSpaceId) {
                  return {
                    ...space,
                    name: action.payload.name,
                    total_area_size: action.payload.total_area_size
                  }
                }
                return space
              })
            }
          }

          return floor
        })
      }
    case UPDATE_SPACE_FAILURE:
      return { ...state }
    case UPDATE_SPACE_REQUEST:
      return { ...state }
    default:
      return state
  }
}

// Sagas

export function* watchRequestStackPlan() {
  yield takeEvery(REQUESTED_STACK_PLAN, getStackPlanAsync)
}

export function* watchUpdateSpaceRequest() {
  yield takeEvery(UPDATE_SPACE_REQUEST, updateSpacePlan)
}

function* updateSpacePlan({ payload }) {
  try {
    toast.success('Space successfully changed!')
    yield put(updateSpaceSuccess(payload))
  } catch (error) {
    yield put(updateSpaceFailure(error))
  }
}

function* getStackPlanAsync() {
  try {
    const data = fakeData

    yield put(requestStackPlanSuccess(data))
  } catch (error) {
    yield put(requestStackPlanFailure(error))
  }
}

// Selectors

export const stackPlanSelector = state => state.stackPlan

export const currentSpaceIdSelector = state => state.currentSpaceId
export const currentFloorIdSelector = state => state.currentFloorId

export const getSpaceByIdSelector = (floors, spaceId, floorId) => {
  const currentFloor = floors.find(floor => floor.uuid === floorId)
  const currentSpace =
    currentFloor && currentFloor.spaces.find(space => space.uuid === spaceId)

  return currentSpace
}

export const maxFloorAreaSelector = createSelector(
  stackPlanSelector,
  floors => Math.max(...floors.map(floor => floor.total_area))
)

export const currentSpaceSelector = createSelector(
  [stackPlanSelector, currentSpaceIdSelector, currentFloorIdSelector],
  (floors, spaceId, floorId) => getSpaceByIdSelector(floors, spaceId, floorId)
)

export default reducer
