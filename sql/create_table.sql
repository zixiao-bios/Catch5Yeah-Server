create table `requests`
(
    `id`   int unsigned auto_increment,
    `time` datetime    not null,
    `ip`   varchar(15) not null,
    `type` varchar(10) not null,
    primary key (`id`)
);