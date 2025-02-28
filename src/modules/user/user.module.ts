// Import the core libraries
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

// Import the custom files
import { User } from "@/modules/user/models/user.entity";
import { UserResolver } from "@/modules/user/user.resolver";
import { UserService } from "@/modules/user/user.service";

@Module({
	imports: [TypeOrmModule.forFeature([User])],
	providers: [UserResolver, UserService],
	exports: [UserService]
})
export class UserModule{}