import { connect } from 'react-redux';
import { StatsComponent } from './stats.component';

const mapStateToProps = (state: any) => ({

});

const mapDispatchToProps = (dispatch: any) => ({
   
});

export const StatsContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(StatsComponent);