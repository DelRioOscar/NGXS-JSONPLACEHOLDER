import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiPrefixInterceptor } from '@interceptors/api-prefix.interceptor';

export const interceptorProviders =
    [
        { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true }
    ];
