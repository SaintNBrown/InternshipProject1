import { Controller, Get, Query } from "@nestjs/common";
import { InfoService } from "./info.service";

@Controller('info')
export class InfoController{
  constructor(private readonly infoService: InfoService){}
  
  
  @Get()
  getinfo(@Query('slack_name') slack_name:string, @Query('track') track:string){
    return this.infoService.getInfo(slack_name, track);
  }
}