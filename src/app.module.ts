import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ProdutoModule } from './produto/produto.module';
import { UserModule } from './user/user.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [DbModule, ProdutoModule, UserModule, CategoriaModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
