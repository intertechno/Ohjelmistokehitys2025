*** Settings ***
Library           Laskentaa.py

*** Test Cases ***
Summa Kahdella Positiivisella
    ${tulos}=    summa    3    5
    Should Be Equal As Numbers    ${tulos}    8

Summa Negatiivisella
    ${tulos}=    summa    -2    7
    Should Be Equal As Numbers    ${tulos}    5

Tulo Kahdella Positiivisella
    ${tulos}=    tulo    4    6
    Should Be Equal As Numbers    ${tulos}    24

Tulo Negatiivisella
    ${tulos}=    tulo    -3    5
    Should Be Equal As Numbers    ${tulos}    -15
