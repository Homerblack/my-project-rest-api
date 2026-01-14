/*
if i had to write this in java this would be equivalent to what i wrote !!!
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EstateTransactionRepository {
    List<EstateTransaction> findByFilters(Integer prefCode, Integer year, Integer type);
}
*/


///This is interface to class i will later call this function 
export interface RealStateRepository{
    // if it was in java List<Object> filterData(Integer pref, Integer year, Integer type)
    //it is litterally passing object called filters (This is the way of doing in Typescript)
    filterData(filters: {
    prefectureCode?: number;
    year?: number;
    type?: number;
}): Promise<any[]>;
}