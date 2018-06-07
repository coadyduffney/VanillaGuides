const classBtns = document.querySelectorAll('.classBtn');

// Twitter Share function
function tweet() {
    link = 'https://coadyduffney.github.io/VanillaGuides/index.html';
    text = `Check out these awesome classic wow guides! ${link}`;
    var url = `https://twitter.com/intent/tweet?hashtags=ClassicWoW&related=worldofwarcraft&text=${text}`;
    window.open(url);
}
document.querySelector('.twitter').addEventListener('click', tweet);

// Facebook Share Function
function facebook() {
    text = 'Check out these awesome classic wow guides! https://coadyduffney.github.io/VanillaGuides/index.html'
    link = 'https://coadyduffney.github.io/VanillaGuides/index.html';
    var url = `http://www.facebook.com/sharer.php?u=${link}`;
    window.open(url);
}
document.querySelector('.facebook').addEventListener('click', facebook);


// Reddit Share Function
function reddit() {
    link = 'https://coadyduffney.github.io/VanillaGuides/index.html';
    var url = `//www.reddit.com/submit?url=${link}`;
    window.open(url);
}
document.querySelector('.reddit').addEventListener('click', reddit);


// Render Content to UI
function toggleActive(e) {
    const button = e.target.alt;

    if (button === 'warrior') {
        // document.querySelector('.classContent').innerHTML = `warrior markup here`;
        
    } else if (button === 'mage') {
        document.querySelector('.classContent').innerHTML = `
        <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active show" data-toggle="tab" href="#overview">Overview</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#talents">Talents</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#gear">Pre-Raid Gear</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#stat-priority">Stat Priorities</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#enchants">Enchants</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#consumables">Consumables</a>
        </li>
        <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gear</a>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="#gear" data-toggle="tab">Pre-Raid Gear (1.12)</a>
                <a class="dropdown-item" href="#stat-priority" data-toggle="tab">Stat Priority</a>
                <a class="dropdown-item" href="#enchants" data-toggle="tab">Enchants</a>
                <a class="dropdown-item" href="#consumables" data-toggle="tab">Consumables</a>
            </div>
        </li> -->
    </ul>
    <div id="myTabContent" class="tab-content">

        <!-- Overview Tab -->
        <div class="tab-pane fade active show" id="overview">
            <br>
            <h3 class="mageColor">Mage</h3>
            <p>Mages are ranged damage dealers (DPS). No other class has such a huge variety of massively powerful
                abilities. Mages are sometimes referred to as "glass cannons" due to their cloth armor - they
                are probably the most fragile class in World of Warcraft. A mage that allows an enemy to get
                within melee range will likely not live long. Mages are also very valued for their AoE and crowd
                control abilities, and being able to conjure food and water for themselves and other players, and are able to teleport themselves, or open portals to major cities that
                their group can use. They are also one of the only classes that excel at AoE grinding mobs as
                a way of leveling.
            </p>
            <p>
                Mages 3 talent specializations are <strong>Fire, Frost, and Arcane.</strong>
            </p>
            <p>If you'd like a more in-depth look at the Mage class, check out the video below.</p>
            <div class="embed-responsive embed-responsive-16by9">
            <iframe src="https://www.youtube.com/embed/nuumV8Zw55A?list=PL1fIib3KlV1rw9gC8XG-1xze01PKCRIv6" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
            <p class="text-muted">source: <a href="http://vanilla-wow.wikia.com/wiki/Choosing_a_class" target="_blank">vanilla-wow.wikia.com</a></p>
        </div>

        <!-- Talents Tab -->
        <div class="tab-pane fade" id="talents">
            <br>
            <h3 class="mageColor">Talents</h3>
            <br>
            <h4 class="mageColor">PvE</h4>
            <p>For 5-man instances and 20-man raids, the fire-combustion build performs well:</p>
            <p>
                <a href="https://classicdb.ch/?talent#of0Ab0MZxgM0fcht0h" target="_blank">Fire Combustion 17/31/3</a>
            </p>
            <img src="assets/fireCombustion.png" alt="Fire-Combustion" class="img-fluid">
            <p>There are certain mobs that are resistant to Fire in the blackrock mountain instances, but just use
                frost spells against those mobs. Enjoy playing Fire while it lasts, because the moment you start
                to venture into Molten Core, you won’t be playing Fire anymore for a very very long time.</p>

            <br>

            <p>For Molten Core and Blackwing Lair the only sensible option is frost. There are 2 frost-options.
                The Winter’s Chill-stacking spec, and the Arcane Power-frost spec.</p>
            <p>
                <a href="https://classicdb.ch/?talent#of0yb0cZZVA0fMfzVo" target="_blank">Winter’s Chill 19/0/32</a>
            </p>
            <img src="assets/wintersChill.png" alt="Winter's Chill" class="img-fluid">

            <br>
            <br>
            <p>
                <a href="https://classicdb.ch/?talent#of0E0ofquZVA0c0s" target="_blank">Arcane Power-frost 31/0/20</a>
            </p>
            <img src="assets/arcane-power.png" alt="Winter's Chill" class="img-fluid">
            <p>Winter’s Chill adds 10% crit chance to all Frost spells from all mages in the raid. It is a must
                that there is atleast 1 mage in your guild who joins the raids with these talents. It is a common
                procedure that the newcomers in the guild gets asked to spec Winter’s Chill while the better
                geared mages use the Arcane Power variant, however having some of the most experienced mages
                use Improved Blizzard is probably the best way to progress through the Suppresion Room in Blackwing
                Lair, and should not be left in the hands of the newcomers neccesarily.</p>

            <p>Having all mages spec into Winters-chill Spec (or some variant) can also be useful when your guild
                is trying new content where there is raid-damage involved. Having Ice Barrier and Ice Block will
                take some stress of the healers. The longer the raid survives, even if you’re not getting the
                kill, the more up-time you have on the encounter to learn and adapt to the mechanics.</p>

            <p>For Ahn’Qiraj Temple and Naxxramas you will be using Fire Combustion in most of the raids. For some
                fights, frost talents really help out, but if your guild has started naxxramas, you hopefully
                don’t have much use for tips on what to spec anymore, so let’s just skip that.</p>
            <p class="text-muted">source: <a href="https://legacy-wow.com/vanilla-mage-guide/#Tal" target="_blank">legacy-wow.com</a></p>

            <br>

            <h4 class="mageColor">PvP</h4>
            <p><a href="https://classicdb.ch/?talent#oZVgMzf0uZVzGhkbth" target="_blank">Elemental PvP Build</a></p>
            <img src="assets/elemental.png" alt="Elemental PvP" class="img-fluid">
        </div>

        <!-- Pre-Raid Gear Tab -->
        <div class="tab-pane fade" id="gear">
            <br>
            <h3 class="mageColor">Pre-Raid Gear</h3>
            <p>Since the two first 40-man raids will be done with Frost talents, we’ll have the Pre-raid gear items
                fit that pattern. Without donations, rep-farming or drops from the summonable bosses which can
                only be done as part of the T0.5 quest-chains, this is what your pre-raid BiS list would look
                like:
            </p>

            <ul>
                <li>Helm:
                    <a href="https://classicdb.ch/?item=22267" class="rare" target="_blank">Spellweaver’s Turban</a> – Upper Blackrock Spire</li>
                <li>Neck:
                    <a href="https://classicdb.ch/?item=22403" class="rare" target="_blank">Diana’s Pearl Necklace</a> – Strat Living</li>
                <li>Shoulder:
                    <a href="https://classicdb.ch/?item=11782" class="rare" target="_blank">Boreal Mantle</a> – Blackrock Depths</li>
                <li>Cloak:
                    <a href="https://classicdb.ch/?item=20697" class="rare" target="_blank">Crystalline Threaded Cape</a> – auction House</li>
                <li>Chest:
                    <a href="https://classicdb.ch/?item=19682" class="rare" target="_blank">Bloodvine Vest</a> – crafted by tailor</li>
                <li>Wrist:
                    <a href="https://classicdb.ch/?item=18497" class="rare" target="_blank">Sublime Wristguards</a> – Dire Maul North</li>
                <li>Gloves:
                    <a href="https://classicdb.ch/?item=13253" class="rare" target="_blank">Hands of Power</a> – Lower Blackrock Spire
                </li>
                <li>Belt:
                    <a href="https://classicdb.ch/?item=11662" class="rare" target="_blank">Ban’thok Sash</a> – Blackrock Depths</li>
                <li>Legs:
                    <a href="https://classicdb.ch/?item=19683" class="rare" target="_blank">Bloodvine Leggings</a> – crafted by tailor</li>
                <li>Boots:
                    <a href="https://classicdb.ch/?item=19684" class="rare" target="_blank">Bloodvine Boots</a> – crafted by tailor</li>
                <li>Ring:
                    <a href="https://classicdb.ch/?item=22433" class="rare" target="_blank">Don Mauricio’s Band of Domination</a> – Scholomance</li>
                <li>Ring:
                    <a href="https://classicdb.ch/?item=942" class="epic" target="_blank">Freezing Band</a> – Auction House</li>
                <li>Trinket:
                    <a href="https://classicdb.ch/?item=12930" class="rare" target="_blank">Briarwood Reed</a> – Upper Blackrock Spire</li>
                <li>Trinket:
                    <a href="https://classicdb.ch/?item=13968" class="rare" target="_blank">Eye of the Beast</a> – quest reward as part of the Onyxia-attunement Quest (horde) – or through
                    a quest started by killing the last boss in Lower Blackrock Spire (alliance).</li>
                <li>Weapon:
                    <a href="https://classicdb.ch/?item=18534" class="rare" target="_blank">Rod of the Ogre Magi</a> – Dire Maul North</li>
                <li>Wand:
                    <a href="https://classicdb.ch/?item=13938" class="rare" target="_blank">Bonecreeper Stylus</a> – Scholomance</li>
            </ul>
            <p class="text-muted">source: <a href="https://legacy-wow.com/vanilla-mage-guide/#Gear" target="_blank">legacy-wow.com</a></p>
        </div>

        <!-- Stat Priority -->
        <div class="tab-pane fade" id="stat-priority">
            <br>
            <h3 class="mageColor">Stat Priorities</h3>
            <p>We have 3 aims for collecting our stats, listed from most important to least important.</p>
            <p>Increase the damage of our spells, as to increase our dps</p>
            <ul>
                <li>Increased Spell Damage</li>
                <li>Chance to Critical Hit with Spells</li>
                <li>Chance to Hit with Spells</li>
                <li>Spell Penetration (not worth collecting for Pve)</li>
            </ul>

            <p>Increase our mana pool and regeneration, as to increase our dmg till oom.</p>
            <ul>
                <li>Intellect</li>
                <li>Spirit</li>
                <li>Mana per 5 seconds (MP5)</li>
            </ul>

            <p>Increase our survivability, as to allow us to continue to deal damage</p>
            <ul>
                <li>Stamina</li>
                <li>Resistance</li>
            </ul>

            <p>I strongly recommend downloading the addon Theorycraft. This will expand the ingame tooltip of your
                spells and give detailed information about the items you’re wearing and their effect on your
                spells.
            </p>
            <p class="text-muted">source: <a href="https://legacy-wow.com/vanilla-mage-guide/#Gear" target="_blank">legacy-wow.com</a></p>
        </div>

        <!-- Enchants Tab -->
        <div class="tab-pane fade" id="enchants">
            <br>
            <h3 class="mageColor">Enchants</h3>
            <p>Ensuring you have the proper enchants on your gear not only will ensure you are maximizing your DPS output, but will also make sure you are taken seriously.</p>
            <ul>
                <li>Helm:
                    <a href="https://classicdb.ch/?item=18330" class="common" target="_blank">Arcanum of Focus</a> gotten from doing the
                    <a href="https://classicdb.ch/?item=18333" class="common" target="_blank">Libram of Focus</a> quest. If you got
                    <a href="https://classicdb.ch/?item=22267" class="rare" target="_blank">Spellweaver’s Turban</a> or something better, then definately go for the Zul’Gurub Enchant:
                    <a href="https://classicdb.ch/?item=19787" class="rare" target="_blank">Presence of Sight</a>
                </li>

                <li>Shoulder:
                    <a href="https://classicdb.ch/?item=20076" class="rare" target="_blank">Zandalar Signet of Mojo</a> – requires Exalted Reputation with Zul’Gurub</li>

                <li>Cloak:
                    <a href="https://classicdb.ch/?spell=25084" class="rare" target="_blank">Sublety *</a>
                </li>

                <li>Chest:
                    <a href="https://classicdb.ch/?spell=20025" class="rare" target="_blank">Greater Stats</a> – semi-rare enchant. Alternatively you can use
                    <a href="https://classicdb.ch/?spell=20026" class="rare" target="_blank">Major Health</a> to compensate for the low amount of hp from bloodvine gear Wrist: Mana Regeneration
                    or Superior Stamina</li>

                <li>Wrist:
                    <a href="https://classicdb.ch/?spell=23801" class="rare" target="_blank">Mana Regeneration</a> or
                    <a href="https://classicdb.ch/?spell=20011" class="rare" target="_blank">Superior Stamina</a>
                </li>

                <li>Gloves:
                    <a href="https://classicdb.ch/?spell=25074" class="rare" target="_blank">Frost Power*</a> or
                    <a href="https://classicdb.ch/?spell=25078" class="rare" target="_blank">Fire Power*</a>
                </li>

                <li>Legs:
                    <a href="https://classicdb.ch/?item=18330" class="common" target="_blank">Arcanum of Focus</a> gotten from doing the
                    <a href="https://classicdb.ch/?item=18333" class="common"
                        target="_blank">Libram of Focus</a> quest. If you got the
                    <a href="https://classicdb.ch/?item=19683" class="rare"
                        target="_blank">Bloodvine Leggings</a> or better then definately go for the Zul’Gurub enchant
                    <a href="https://classicdb.ch/?item=19787"
                        class="rare" target="_blank">Presence of Sight</a>
                </li>

                <li>Boots:
                    <a href="https://classicdb.ch/?spell=13890" class="rare" target="_blank">Minor Speed</a> is my preferred choice, others may go with
                    <a href="https://classicdb.ch/?spell=20020"
                        class="rare" target="_blank">Greater Stamina</a> or
                    <a href="https://classicdb.ch/?spell=20024" class="rare" target="_blank">Spirt</a>
                </li>

                <li>Weapon:
                    <a href="https://classicdb.ch/?spell=22749" class="rare" target="_blank">Spell Power*</a>
                </li>
            </ul>
            <p>* = Rare-enchant. Drops from bosses in Molten Core or Ahn’Qiraj.</p>
            <p class="text-muted">source: <a href="https://legacy-wow.com/vanilla-mage-guide/" target="_blank">legacy-wow.com</a></p>
            
        </div>

        <!-- Consumables Tab -->
        <div class="tab-pane fade" id="consumables">
            <br>
            <h3 class="mageColor">Consumables</h3>
            <p>Depending on which raids you are doing, some of these consumables may be considered over-extending
                a little bit. However here’s a somewhat full list of the consumables that i bring to AQ40 and
                Naxxramas raids:</p>
            <p>Standard Consumables: </p>
            <ul>
                <li>
                    <a href="https://classicdb.ch/?item=13512" target="_blank">Flask of Supreme Power</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=20749" target="_blank">Brilliant Wizard Oil</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=13454" target="_blank">Greater Arcane Elixir</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=21546" target="_blank">Elixir of Greater Firepower</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=20007" target="_blank">Mageblood Potion</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=13931" target="_blank">Nightfin Soup</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=13444" target="_blank">Major Mana Potion</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=3387" target="_blank">Limited Invulnerability Potion</a> – drop all aggro temporarily.</li>
            </ul>

            <p>Extra for specific encounters:</p>
            <ul>
                <li>
                    <a href="https://classicdb.ch/?item=13510" target="_blank">Flask of the Titans</a> – instead of supreme power</li>
                <li>
                    <a href="https://classicdb.ch/?item=21023" target="_blank">Dirge’s Kickin’ Chimaerok Chops</a> – instead of nightfin soup</li>
                <li>
                    <a href="https://classicdb.ch/?item=12662" target="_blank">Demonic Rune</a> – for long fights these are better than mana gems</li>
                <li>
                    <a href="https://classicdb.ch/?item=20079" target="_blank">Spirit of Zanza</a> – requires zul’gurub honored reputation</li>
                <li>
                    <a href="https://classicdb.ch/?item=13457" target="_blank">Greater Fire Protection Potion</a> – ragnaros, grand widow faerlina</li>
                <li>
                    <a href="https://classicdb.ch/?item=13458" target="_blank">Greater Nature Protection Potion</a> – several aq40 bosses and few in naxx</li>
                <li>
                    <a href="https://classicdb.ch/?item=13459" target="_blank">Greater Shadow Protection Potion</a> – c’thun in aq40. loatheb in naxx</li>
                <li>
                    <a href="https://classicdb.ch/?item=17056" target="_blank">Light Feather</a> – anub’rekhan</li>
                <li>
                    <a href="https://classicdb.ch/?item=21151" target="_blank">Rumsey Rum Black Label</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=3825" target="_blank">Elixir of Fortitude</a>
                </li>
            </ul>
            <p class="text-muted">source: <a href="https://legacy-wow.com/vanilla-mage-guide/" target="_blank">legacy-wow.com</a></p>
        </div>
    </div>
        `;

    } else if (button === 'warlock') {
        document.querySelector('.classContent').innerHTML = `
        <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active show" data-toggle="tab" href="#overview">Overview</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#leveling">Leveling</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#stat-priority">Dungeon/Raid Spec</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#gear">Pre-Raid Gear</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#enchants">Enchants</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#consumables">Consumables</a>
        </li>
        <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Gear</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#gear" data-toggle="tab">Pre-Raid Gear (1.12)</a>
                        <a class="dropdown-item" href="#stat-priority" data-toggle="tab">Stat Priority</a>
                        <a class="dropdown-item" href="#enchants" data-toggle="tab">Enchants</a>
                        <a class="dropdown-item" href="#consumables" data-toggle="tab">Consumables</a>
                    </div>
                </li> -->
    </ul>
    <div id="myTabContent" class="tab-content">

        <!-- Overview Tab -->
        <div class="tab-pane fade active show" id="overview">
            <br>
            <h3 class="warlock">Warlock</h3>
            <p>Warlocks are masters of the demonic arts. In the World of Warcraft universe, they are shamans and mages who have been tempted away from the use of arcane magic or the elements, but they retain a number of similarities with both, and fulfill similar ranged DPS role in groups. The largest difference is their ability to summon a variety of demon minions, each of which has different abilities and is useful in different situations. Warlocks are feared for their DoT abilities, which are able to cause huge amounts of damage to their targets even after the warlock has died, and their curses and banes, which cause a variety of debuffs, and they have a few buffs and other abilities that, although somewhat situational, can be very effective.
            </p>
            <p>
                They are an essential part of any group, with their ability to conjure health stones for their group, soulstone healers, and even summon other members to their location. <br> Warlocks 3 talent specializations are <strong>Affliction, Destruction, and Demonology</strong>.
            </p>
            <p>If you'd like a more in-depth look at the Warlock class, check out the video below.</p>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe width="854" height="480" src="https://www.youtube.com/embed/n96xIpvwWZI?list=PL1fIib3KlV1rw9gC8XG-1xze01PKCRIv6" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>


            <p class="text-muted">source:
                <a href="http://vanilla-wow.wikia.com/wiki/Choosing_a_class" target="_blank">vanilla-wow.wikia.com</a>
            </p>
        </div>

        <!-- Leveling Tab -->
        <div class="tab-pane fade" id="leveling">
            <br>
            <h3 class="warlock">Leveling</h3>
            <p>In Vanilla, you can Generally take on 2 mobs at once pretty easily allowing for fast leveling! One is DoT’d and VW tanked, while the other is DoT’d and running around feared. 3 mobs can be a bit trickier, One DoT’d and tanked by VW, the other body aggro’d on VW, the third DoT’d and running around feared. The only difference between taking on 2 or 3+ mobs is that you CANNOT use any life gain spells (Drain Life or Siphon Life) as you will pull ‘healing aggro’ from the unfocused mob</p>

            <ul class="no-bullets">
                <li><strong>Lvls 10-16: Affliction</strong></li>
                <li>10 – 11: Imp Corruption (2/5)</li>
                <li>12 – 14: Suppression (3/5)</li>
                <li>15 – 16: Imp Drain Soul (2/2)</li>
            </ul>
            <br>
            <ul class="no-bullets">
                <li><strong>Lvls 17 – 24: Demonology</strong></li>
                <li>17 – 18: Imp Healthstone (2/2)</li>
                <li>19 – 21: Demonic Embrace (3/5)</li>
                <li>22 – 24: Imp Voidwalker (3/3)</li>
            </ul>
            <br>
            <ul class="no-bullets">
                <li><strong>Lvls 25 – 47: Affliction</strong></li>
                <li>25 – 27: Imp Corruption (5/5)</li>
                <li>28 – 30: Imp CoA (3/3)</li>
                <li>31 – 32: Imp Lifetap (2/2)</li>
                <li>33 – 34: Nightfall (2/2)</li>
                <li>35 – 36: Grim Reach (2/2)</li>
                <li>37: Suppression (4/5)</li>
                <li>38: Siphon Life (1/1)</li>
                <li>39: Suppression (5/5)</li>
                <li>40: Amplify Curse (1/1)</li>
                <li>41 – 42: Fel Concentration (2/5) <- See below *</li>
                <li>43 – 47: Shadow Mastery (5/5)</li>
                <li></li>

            </ul>
            <br>
            <ul class="no-bullets">
                <li><strong>Lvls 48 – 60: Demonology</strong></li>
                <li>48 – 49: Demonic Embrace (5/5)</li>
                <li>50: Fel Domination (1/1)</li>
                <li>51 – 54: Fel Intellect (4/5)</li>
                <li>55 – 59: Unholy Power (5/5)</li>
                <li>60: Demonic Sacrifice (1/1) <- See below **</li>
            </ul>
            <br>
            <p>* These two points you can put anywhere. Some people like Curse of Exhaustion, some like Imp Curse of Weakness. It really doesn’t matter, they are points needed to be spent to unlock the next tier.<br>
            ** At this point you should consider respeccing into a dungeon/raid spec and start working on your pre-raid BiS.<br>
            Always have your VW out while questing and/or grinding, nothing else.</p>
            
            <p><a href="https://classicdb.ch/?talent#IEMbGRboVZbxNz0xo" target="_blank">Leveling Build 30/21/0</a></p>
            <img src="assets/warlockLeveling.png" alt="Warlock-Leveling-Build" class="img-fluid">
            <hr>
            <h5 class="warlock">Rotation</h5>
            <p>If its a quick kill (< 20 seconds): DoT with Siphon Life and Corruption.<br></20>
            If its a longer kill (> 20 seconds): DoT with Siphon Live, CoA, and Corruption. Only reapply Corruption if needed, as reapplying CoA/Siphon Life is not mana efficient (unless the fight is 50+ seconds long).</p>

            <h5 class="warlock">VERY IMPORTANT LEVELING POINTS</h5>
            <p>
                Unless you want the XP, you can skip most of the warlock class quests, with the following exceptions<br>
                <strong>Level 10</strong> – <a href="https://classicdb.ch/?search=the+binding" target="_blank" class="rare">The Binding</a> – VW quest<br>
                <strong>Level 31</strong> – <a href="https://classicdb.ch/?quest=4736" target="_blank" class="rare">In Search Of Menara Voidrender</a> – quest for <a href="https://classicdb.ch/?item=6900" target="_blank" class="rare">Enchanted Gold Bloodrbe</a> that can last you well into your 50s.<br>
                <strong>Level 35</strong> – <a href="https://classicdb.ch/?quest=4968" target="_blank" class="rare">Knowledge of the Orb of Orahil</a> – Make sure you go <a href="https://classicdb.ch/?quest=4964" target="_blank" class="rare">The Completed Orb of Dar’Orahil</a> route and take the orb! This will last you quite a long while, and the active use isn’t that bad.<br>
                <strong>Level 40</strong> – <a href="https://classicdb.ch/?search=summon+felsteed" target="_blank" class="rare">Summon Felsteed</a> – click, click, free mount<br>
                <strong>Level 50</strong> – <a href="https://classicdb.ch/?quest=8419" target="_blank" class="rare">An Imp’s Request</a> – quest for a unique, warlock only weapon, the <a href="https://classicdb.ch/?item=20536" target="_blank" class="rare">Soul Harvester</a>!!! Side note – take the trinket. The staff will eventually be replaced, the trinket has no substitute and is useful forever (including TBC)<br>
                <br>
                The following is your Drain Soul Macro. This is what you will use in place of Drain Soul once you get a soul shard bag. It will delete the item (soul shard) in the bottom right corner of your left most bag, which normally would be our soul shard bag. If the bag is not full, it wont delete anything. You should be using this macro/spell to kill every mob you are fighting. This will give you a nice 10 second buff that will give you a nice little chunk of mana.</p>

                <div class="card">
                    <div class="card-body">
                        <p>/cast Drain Soul(Rank 1)<br>
                            /run local a=GetBagName(4); if a=="Core Felcloth Bag" or a=="Felcloth Bag" or a=="Soul Pouch" or a=="Box of Souls" or a=="Small Soul Pouch" then PickupContainerItem(4,GetContainerNumSlots(4)) DeleteCursorItem() else end</p>
                    </div>
                </div>

                <br>
                <p>Between levels 37 and 44, buy or have made every piece of <a href="https://classicdb.ch/?search=shadoweave" target="_blank" class="common">Shadoweave</a>. It is a good base set that will improve your damage. You can start replacing pieces if you find something with both Int and Spirit. Even though we are not really a Spirit based class, the more we have, the more mana we can recuperate with Imp Drain Soul.</p>

                <p>Not all levels are created equal<br>
                    Save your money!! Since we dont have to purchase a mount at lvl 40, we are in an advantageous position that we can spend that money on gear. Only spend money to level Corruption, CoA, Siphon Life, Lifetap, shadowbolt, demon armor, soul stone, health stone, and your VW books. And start saving your money for some of your pre-raid BiS gear that is BoE. IE <a href="https://classicdb.ch/?item=18407" target="_blank" class="rare">Felcloth Gloves</a>.</p>
        </div>

        <!-- Pre-Raid Gear Tab -->
        <div class="tab-pane fade" id="gear">
            <br>
            <h3 class="warlock">Pre-Raid Gear</h3>
            <p>There are many options for your Pre-Raid BiS gear, so I'll just list some of them. If you want to see a full detailed list of gear for warlocks you can go to <a href="https://docs.google.com/spreadsheets/d/1XufUpGSKHrmlDq3VCQMBDap7gjNk47MS-XILyj3bVaA/edit#gid=118447046" target="_blank">this spreadsheet</a>
            </p>

            <ul>
                <li>Helm:
                    <a href="https://classicdb.ch/?item=14111" class="common" target="_blank">Felcloth Hood</a> – Tailoring</li>
                <li>Neck:
                    <a href="https://classicdb.ch/?item=13141" class="rare" target="_blank">Tooth of Gnarr</a> – UBRS (Drakkisath)</li>
                <li>Shoulder:
                    <a href="https://classicdb.ch/?item=14112" class="common" target="_blank">Felcloth Shoulders</a> – Tailoring</li>
                <li>Cloak:
                    <a href="https://classicdb.ch/?item=18350" class="rare" target="_blank">Amplifying Cloak</a> – Dire-Maul West (Magister Kalendris)</li>
                <li>Chest:
                    <a href="https://classicdb.ch/?item=14136" class="rare" target="_blank">Robe of Winter Night</a> – Tailoring</li>
                <li>Wrist:
                    <a href="https://classicdb.ch/?item=18497" class="rare" target="_blank">Sublime Wristguards</a> – Dire Maul North</li>
                <li>Gloves:
                    <a href="https://classicdb.ch/?item=18407" class="rare" target="_blank">Felcloth Gloves</a> – Dire Maul North (Tailoring)
                </li>
                <li>Belt:
                    <a href="https://classicdb.ch/?item=18475" class="rare" target="_blank">Oddly Magical Belt</a> – Dire Maul North Tribute Chest</li>
                <li>Legs:
                    <a href="https://classicdb.ch/?item=13170" class="rare" target="_blank">Skyshroud Leggings</a> – LBRS (High Lord Omokk)</li>
                <li>Boots:
                    <a href="https://classicdb.ch/?item=11822" class="rare" target="_blank">Omnicast Boots</a> – BRD (Golem Lord Arglemach)</li>
                <li>Ring:
                    <a href="https://classicdb.ch/?item=1980" class="rare" target="_blank">Underworld Band</a> – World BOE</li>
                <li>Ring:
                    <a href="https://classicdb.ch/?item=12545" class="epic" target="_blank">Eye of Orgrimmar</a> – Quest (BRD -The Princess Saved)</li>
                <li>Trinket:
                    <a href="https://classicdb.ch/?item=12930" class="rare" target="_blank">Briarwood Reed</a> – Upper Blackrock Spire</li>
                <li>Trinket:
                    <a href="https://classicdb.ch/?item=13968" class="rare" target="_blank">Eye of the Beast</a> – quest reward as part of the Onyxia-attunement Quest (horde) – or through
                    a quest started by killing the last boss in Lower Blackrock Spire (alliance).</li>
                <li>MH:
                    <a href="https://classicdb.ch/?item=18372" class="rare" target="_blank">Blade of the New Moon</a> – Dire Maul West (Immol'thar)</li>
                <li>OH:
                        <a href="https://classicdb.ch/?item=13029" class="rare" target="_blank">Umbral Crystal</a> – World BOE</li>
                <li>2H:
                    <a href="https://classicdb.ch/?item=18534" class="rare" target="_blank">Rod of the Ogre Magi</a> – Dire Maul North - Tribute Chest</li>
                <li>Wand:
                        <a href="https://classicdb.ch/?item=13396" class="rare" target="_blank">Skul's Ghastly Touch</a> – Stratholme (Skul)</li>
            </ul>
        </div>

        <!-- Dungeon/Raid Specs -->
        <div class="tab-pane fade" id="stat-priority">
            <br>
            <h3 class="warlock">Dungeon/Raid Spec</h3>
            <p>You’ve just hit 60, congrats!! Now what? If you want to continue to quest grind for gold, rewards, and rep, by all means keep your same spec and go to town. However, if you find yourself with the inclining to start running dungeons for loot and eventually getting into a raiding guild, here is what you should shoot for.</p>
            <p>You really only have 2 choices here:</p>
            <p>
                <a href="https://classicdb.ch/?talent#IEMbhRroVZZgx0tM0z" target="_blank">SM / Ruin</a> - DoT EVERYTHING with corruption, spam shadowbolts.
                <br>
                <strong>Pros</strong>: Higher survivability outside of raids and dungeons because of Siphon Life.
                <br>    
                <strong>Cons</strong>: Lower overall DPS than DS/Ruin
            </p>
            <img src="assets/sm-ruin.png" alt="SM-Ruin Build" class="img-fluid">

            <hr>

            <p>
                <a href="https://classicdb.ch/?talent#IV0bZfxmzMhoZvx0tM0z" target="_blank">5/5 Imp Corr DS/Ruin</a> -  Sacrifice succubus, pretend you are a shadow spec mage bot that spams shadowbolts.
                <br>
                <strong>Pros</strong>: Higher overall DPS than SM/Ruin, Can use Curse of Shadows instead of Curse of Agony.
                <br>    
                <strong>Cons</strong>: Glass cannon.
            </p>
            <img src="assets/ds-ruin.png" alt="SM-Ruin Build" class="img-fluid">
            <P><strong>Note:</strong> you can choose to take 5 points into Suppression instead of Improved Corruption in the Affliction tree if you prefer.</P>
            <p class="text-muted">source: <a href="https://legacy-wow.com/warlock-leveling-guide-1-60/" target="_blank">legacy-wow.com</a></p>
        </div>

        <!-- Enchants Tab -->
        <div class="tab-pane fade" id="enchants">
            <br>
            <h3 class="warlock">Enchants</h3>
            <p>Ensuring you have the proper enchants on your gear not only will ensure you are maximizing your DPS output, but will also make sure you are taken seriously.</p>
            <ul>
                <li>Helm:
                    <a href="https://classicdb.ch/?item=19788" class="common" target="_blank">Hoodoo Hex</a> >
                    <a href="https://classicdb.ch/?item=18330" class="common" target="_blank">Arcanum of Focus</a>
                </li>

                <li>Shoulder:
                    <a href="https://classicdb.ch/?item=20076" class="rare" target="_blank">Zandalar Signet of Mojo</a> – requires Exalted Reputation with Zul’Gurub</li>
                <li>Cloak:
                    <a href="https://classicdb.ch/?item=16216" class="common" target="_blank">Greater Resistance</a>
                </li>

                <li>Chest:
                    <a href="https://classicdb.ch/?spell=20025" class="common" target="_blank">Greater Stats</a> >
                    <a href="https://classicdb.ch/?item=16242" class="common" target="_blank">Major Mana</a></li>

                <li>Wrist:
                    <a href="https://classicdb.ch/?item=16214" class="common" target="_blank">Greater Intellect</a> >
                    <a href="https://classicdb.ch/?spell=20011" class="common" target="_blank">Superior Stamina</a>
                </li>

                <li>Gloves:
                    <a href="https://classicdb.ch/?item=11226" class="common" target="_blank">Riding Skill</a>
                </li>

                <li>Legs:
                    <a href="https://classicdb.ch/?item=19788" class="common" target="_blank">Hoodoo Hex</a> >
                    <a href="https://classicdb.ch/?item=18330" class="common" target="_blank">Arcanum of Focus</a>
                </li>

                <li>Boots:
                    <a href="https://classicdb.ch/?spell=13890" class="rare" target="_blank">Minor Speed</a> is my preferred choice, others may go with
                    <a href="https://classicdb.ch/?spell=20020" class="rare" target="_blank">Greater Stamina</a> or
                    <a href="https://classicdb.ch/?spell=20024" class="rare" target="_blank">Spirt</a>
                </li>

                <li>Weapon:
                    <a href="https://classicdb.ch/?spell=22749" class="rare" target="_blank">Spell Power</a>
                </li>
            </ul>
            
            <p class="text-muted">source:
                <a href="https://legacy-wow.com/warlock-leveling-guide-1-60/" target="_blank">legacy-wow.com</a>
            </p>

        </div>

        <!-- Consumables Tab -->
        <div class="tab-pane fade" id="consumables">
            <br>
            <h3 class="warlock">Consumables</h3>
            <p>Standard Consumables: </p>
            <ul>
                <li>
                    <a href="https://classicdb.ch/?item=13512" target="_blank">Flask of Supreme Power</a> - for progression or try hard meter smashing.
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=9264" target="_blank">Elixir of Shadow Power</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=20749" target="_blank">Brilliant Wizard Oil</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=13454" target="_blank">Greater Arcane Elixir</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=21546" target="_blank">Elixir of Greater Firepower</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=13444" target="_blank">Major Mana Potion</a>
                </li>
                <li>
                    <a href="https://classicdb.ch/?item=3387" target="_blank">Limited Invulnerability Potion</a> – drop all aggro temporarily.</li>
            </ul>

            <p class="text-muted">source:
                <a href="https://legacy-wow.com/vanilla-mage-guide/" target="_blank">legacy-wow.com</a>
            </p>
        </div>
    </div>
        `;

    } else if (button === 'priest') {
        // document.querySelector('.classContent').innerHTML = `mage markup here`;

    } else if (button === 'druid') {
        // document.querySelector('.classContent').innerHTML = `mage markup here`;

    } else if (button === 'hunter') {
        // document.querySelector('.classContent').innerHTML = `mage markup here`;

    } else if (button === 'paladin') {
        // document.querySelector('.classContent').innerHTML = `mage markup here`;

    } else if (button === 'shaman') {
        // document.querySelector('.classContent').innerHTML = `mage markup here`;

    } else if (button === 'rogue') {
        // document.querySelector('.classContent').innerHTML = `mage markup here`;

    }
}

// Loop through buttons, add event listener
classBtns.forEach(classBtn => classBtn.addEventListener('click', toggleActive));