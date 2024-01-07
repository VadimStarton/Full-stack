<?php


class Kibiras1 {
    
    private $akmenuKiekis = 0;

    public function pridetiAkmeni() {
        $this->akmenuKiekis++;
    }

    public function pridetiDaugAkmenu($kiekis) {
        if (!is_nteger($kiekis)) {
            return;
        }
        if ($kiekis < 0) {
            return;
        }
        $this->akmenuKiekis += $kiekis;
    }

    public function kiekPririnktaAkmenu() {
        return $this->akmenuKiekis;
    }
}