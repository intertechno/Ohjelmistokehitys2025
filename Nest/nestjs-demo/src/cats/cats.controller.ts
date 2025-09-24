import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

interface OneCat {
    id: number;
    name: string;
    age: number;
    breed: string;
}

@Controller('cats')
export class CatsController {

    private cats: OneCat[] = [];

    @Get()
    findAll() {
        return this.cats;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cats.find(cat => cat.id === +id);
    }

    @Post()
    create(@Body() cat: any) {
        const newCat = { id: Date.now(), ...cat };
        this.cats.push(newCat);
        return newCat;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCat: any) {
        const index = this.cats.findIndex(cat => cat.id === +id);
        if (index === -1) return null;
        this.cats[index] = { ...this.cats[index], ...updateCat };
        return this.cats[index];
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.cats = this.cats.filter(cat => cat.id !== +id);
        return { deleted: true };
    }
}
