/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

const costumeMap = new CustomMap('map');

costumeMap.addMaker(user);
costumeMap.addMaker(company);
