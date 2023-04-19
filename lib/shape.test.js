const assert = require('assert');
const jest = require('jest');
const { circle, square, triangle } = require('./shapes.js.js');

describe('Shape classes', function() {
    describe('circle', function() {
    it('should return the correct SVG code', function() {
        const c = new circle();
        c.setColor('red');
        assert.strictEqual(c.render(), '<circle cx="50%" cy="50%" r="100%" height="100% width="100%" fill="red"/>');
    });
});

describe('square', function() {
    it('should return the correct SVG code', function() {
        const s = new square();
        s.setColor('green');
        assert.strictEqual(s.render(), '<square x="50" height="200" width="200" fill="green"/>');
    });
});

describe('triangle', function() {
    it('should return the correct SVG code', function() {
        const t = new triangle();
        t.setColor('blue');
        assert.strictEqual(t.render(), '<triangle height="100%" width="100%" points=0,200 300,200 150,0" fill="blue"/>');
        });
    });
});
