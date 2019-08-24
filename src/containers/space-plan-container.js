import { connect } from 'react-redux'
import { SpacePlan } from '../components/space-plan'
import {
  updateSpaceRequest,
  currentSpaceSelector
} from '../redux/modules/stack-plan'

const mapStateToProps = state => ({
  space: currentSpaceSelector(state.reducer)
})

const mapDispatchToProps = dispatch => ({
  updateSpace: payload => dispatch(updateSpaceRequest(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpacePlan)
