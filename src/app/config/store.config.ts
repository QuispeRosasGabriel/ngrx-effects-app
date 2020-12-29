import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from '../store/app.reducer';

export const storeConfig = [
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production
    })
]