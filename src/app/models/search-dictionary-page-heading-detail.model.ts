import { SearchDictionaryDetailCoordinateModel } from './Search-dictionary-detail-coordinate.model';
import { HighLightedSectionModel } from './high-lighted-section.model';

export class SearchDictionaryPageHeadingDetailModel {
    headingText: string;
    detailText: Array<SearchDictionaryDetailCoordinateModel>;
    headingCoordinate: HighLightedSectionModel;
}