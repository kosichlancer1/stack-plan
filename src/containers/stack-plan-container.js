import { connect } from 'react-redux'
import { StackPlan } from '../components/stack-plan'
import {
  requestStackPlan,
  updateSpaceRequest,
  stackPlanSelector,
  maxFloorAreaSelector,
  chooseSpaceById
} from '../redux/modules/stack-plan'

const mapStateToProps = state => ({
  stackPlan: stackPlanSelector(state.reducer),
  maxArea: maxFloorAreaSelector(state.reducer),
  isLoading: state.reducer.loading,
  currentSpaceId: state.reducer.currentSpaceId
})

const mapDispatchToProps = dispatch => ({
  getStackPlan: () => dispatch(requestStackPlan()),
  updateSpace: payload => dispatch(updateSpaceRequest(payload)),
  chooseSpace: payload => dispatch(chooseSpaceById(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StackPlan)
