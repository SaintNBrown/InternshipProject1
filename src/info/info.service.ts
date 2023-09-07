import { Injectable, Query } from '@nestjs/common';
import * as moment from 'moment';

@Injectable()
export class InfoService {
  getInfo(
    @Query('slack_name') slack_name: string,
    @Query('track') track: string,
  ) {
    const currentDay = moment().format('dddd');
    const utcTime = moment().utc().format('YYYY-MM-DDTH:mm:ss[Z]');

    const githubFileUrl =
      'https://github.com/SaintNBrown/InternshipProject1/tree/main/info';
    const githubRepoUrl =
      'https://github.com/SaintNBrown/InternshipProject1.git';

    const response = {
      slack_name,
      current_day: currentDay,
      utc_time: utcTime,
      track,
      githubFileUrl,
      github_repo_url: githubRepoUrl,
      status_code: 200,
    };
    return response;
  }
}
